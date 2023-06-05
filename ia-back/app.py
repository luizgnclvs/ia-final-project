from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import os
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'uploads/'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

if (os.path.isfile('./model-final.h5')):
    path = 'model-final.h5'
else:
    path = './ia-back/model-final.h5'

model = load_model(path, compile=False)
model.compile()

def preprocess(img):
    img = img.resize((224, 224))
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array /= 255.
    return img_array

def get_class_info(prediction):
    class_id = np.argmax(prediction)

    if class_id == 0:
        class_name = "Calça"
    elif class_id == 1:
        class_name = "Camisa"
    else:
        class_name = "Sapato"
    
    return int(class_id), class_name

@app.route('/uploads', methods=['POST'])
def predict():
    file = request.files['file']
    img = Image.open(file.stream)
    img_processed = preprocess(img)
    prediction = model.predict(img_processed)
    class_id, class_name = get_class_info(prediction)
    response = { 'type': class_id, 'name': class_name }
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
