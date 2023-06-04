from flask import Flask, request, jsonify
from PIL import Image
import os
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.vgg16 import preprocess_input

app = Flask(__name__)
UPLOAD_FOLDER = 'uploads/'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

if (os.path.isfile('./model-final.h5')):
    path = 'model-final.h5'
else:
    path = './ia-back/model-final.h5'

model = load_model(path, compile=False)
model.compile()

def preprocess(img):
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array /= 255.
    return img_array
    # img_resized = np.resize(img_array, (224, 224, 3))
    # img_expanded = np.expand_dims(img_resized, axis=0)
    # return preprocess_input(img_expanded)

def get_class_info(prediction):
    class_id = int(np.argmax(prediction))

    if class_id == 0:
        class_name = "Calça"
    elif class_id == 1:
        class_name = "Camisa"
    else:
        class_name = "Sapato"
    
    return class_id, class_name

@app.route('/uploads', methods=['POST'])
def predict():
    file = request.files['file']
    img = Image.open(file.stream)
    # img_array = np.array(img)
    img_processed = preprocess(img)
    prediction = model.predict(img_processed)
    class_id, class_name = get_class_info(prediction)
    response = {'class_id': class_id, 'class_name': class_name}
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
