# 📈 Sentilytics App

## Descripción
Sentilytics App es una aplicación web desarrollada con React y TypeScript que permite realizar análisis de sentimientos en textos, identificando si el sentimiento expresado es positivo, negativo o neutral. La aplicación utiliza Material UI para ofrecer una interfaz atractiva y moderna, así como Chart.js para visualizar gráficamente el historial de análisis.

## 🚀 Características Principales
- Análisis automático de sentimientos (positivo, negativo, neutral).
- Historial local con gráficos detallados.
- Interfaz amigable y moderna con soporte para modo oscuro y claro.

## 🛠️ Tecnologías Utilizadas
- **Frontend:** React 18, TypeScript, Material UI, Chart.js, Tailwind CSS
- **Backend:** Node.js, Express
- **Persistencia de Datos:** Almacenamiento local (LocalStorage)

## 🖥️ Instalación y Ejecución

### Requisitos previos
- Node.js (v18+ recomendado)
- npm o yarn

### Pasos

1. Clonar el repositorio:
```bash
git clone https://github.com/usuario/sentilytics-app.git
```

2. Navegar al directorio:
```bash
cd sentilytics-app
```

3. Instalar dependencias:
```bash
npm install
```

o usando Yarn:

```bash
yarn install
```

4. Ejecutar la aplicación:
```bash
npm run dev
```

5. Abrir en el navegador:
```
http://localhost:5173
```

## 📦 Cómo usar
- Ingresa el texto que deseas analizar.
- Presiona **"Analizar Sentimiento"**.
- Revisa los resultados instantáneamente.
- Accede al historial para visualizar gráficos detallados de análisis previos.

## 📌 Estructura del Proyecto
```
src
├── assets/
│   └── react.svg
├── components/
│   ├── Loading.tsx
│   ├── Navbar.tsx
│   ├── ResultDisplay.tsx
│   ├── TextForm.tsx
│   └── ThemeToggle.tsx
├── pages/
│   ├── HistoryPage.tsx
│   └── Home.tsx
├── services/
│   ├── api.ts
│   └── historyApi.ts
├── App.css
├── App.tsx
├── index.css
├── index.ts
├── main.tsx
└── vite-env.d.ts
```

## 📄 Licencia
Este proyecto está bajo la licencia MIT.

desarrollador:  davamo  <www.davamo.cl> 