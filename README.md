
# Sentilytics App 💬

Aplicación web desarrollada con React + TypeScript para análisis de sentimientos en texto, visualización de resultados y navegación de historial. Utiliza Material UI y Chart.js para una experiencia de usuario moderna e interactiva.

---

## 🚀 Características

- Análisis automático de sentimientos (positivo, negativo, neutral).
- Interfaz clara y responsiva con temas claro/oscuro.
- Historial de análisis persistido localmente (o vía API).
- Visualización de resultados con gráficos circulares y de barras.
- Navegación entre Home, Resultados y Historial.

---

## 🧰 Tecnologías Utilizadas

- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS, Material UI, Chart.js
- **Backend:** Node.js + Express (API REST)
- **Persistencia:** LocalStorage y consumo de API externa (`/api/analysis`)

---

## ⚙️ Instalación y Ejecución

### 🔧 Requisitos Previos

- Node.js v18+
- npm o yarn

### ▶️ Pasos

```bash
git clone https://github.com/davamo/sentilytics-app.git
cd sentilytics-app
npm install
npm run dev
```

La aplicación estará disponible en:

```
http://localhost:5173
```

---

## 📦 Estructura del Proyecto

```
src/
├── components/          # Componentes visuales reutilizables
│   ├── Navbar.tsx
│   ├── TextForm.tsx
│   ├── ResultDisplay.tsx
│   └── ThemeToggle.tsx
├── pages/               # Páginas principales (Home, Historial)
│   ├── Home.tsx
│   └── HistoryPage.tsx
├── services/            # Conexiones a APIs
│   ├── api.ts
│   └── historyApi.ts
├── App.tsx              # Enrutamiento principal
├── main.tsx             # Punto de entrada
```

---

## 🌐 Consumo del Backend

El frontend espera que el backend esté disponible en:

```
http://localhost:5000/api/analysis
```

El análisis de sentimientos se realiza vía:

```ts
POST /api/analysis
Body: { text: string }
```

---

## 📄 Simulación de despliegue en Azure (hipotética)

- **Frontend hosting**: Azure Static Web Apps
- **CI/CD**: GitHub Actions
- **Conexión al backend**: API REST en Azure App Service

### GitHub Actions (ejemplo simple)

```yaml
name: Deploy Vite App

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18

      - run: npm install
      - run: npm run build

      - name: Deploy to Static Web Apps
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_DEPLOY_TOKEN }}
          repo_token: ${{ secrets.GITHUB_TOKEN }}
          action: "upload"
          app_location: "/"
          output_location: "dist"
```

---

## 🧪 To-Do

- [x] Implementar análisis de texto
- [x] Visualización con gráficos
- [x] Modo oscuro/claro
- [ ] Guardar historial en base de datos (no solo LocalStorage)
- [ ] Desplegar en Azure Static Web Apps

---

## 👨‍💻 Autor

Desarrollado por [davamo](mailto:davamo@davamo.cl)  
GitHub: [https://github.com/davamo/sentilytics-app](https://github.com/davamo/sentilytics-app)

---
