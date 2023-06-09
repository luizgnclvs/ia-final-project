# Inteligência Artificial - Projeto Final

Projeto final da cadeira de Inteligência Artificial Aplicada ofertada pela UNICAP em 2023.1. O projeto consiste na concepção e implementação de um Back-End com uma Rede Neural Artifical utilizando *Python*, *Flask* e *Tensorflow*, além de um Front-End que integre-se a esse Back-End.

- [MODEL](https://drive.google.com/uc?id=1drL1BjRoHoiZ9TlusGTDRa3fM9rtOrrX)
- [DATASET](https://drive.google.com/uc?id=1x2HiCB8oU5AgYuMEPwicGQ7r9m20uI-U)

## Back-End

### Programas e Aplicativos

- É necessário instalar a plataforma *Anaconda* e/ou o gerenciador de pacotes *Conda*.
- Também é preciso instalar o *Python* na versão **3.10** ou acima.

### Ambiente e Blibiotecas

- Após os passos anteriores, é necessário fazer o setup do ambiente:

```
conda create -n myenv python=3.10
```

- E ativar o ambiente:

```
conda activate myenv
```

- Por fim, vamos instalar as bibliotecas utilizadas no projeto:

```
conda install flask tensorflow==2.12 numpy keras flask-cors
```

## Front-End

- No diretório do front, instale as dependências do projeto:

```
cd ia-front/
npm install
```

- E execute a aplicação:

```
npm start
```

- Após a inicialização, a aplicação já deve abrir uma nova guia no seu navegador, mas, caso não aconteça, basta apenas entrar na porta [4200](http://localhost:4200).
