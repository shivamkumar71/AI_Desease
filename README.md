# SYS.LIVE — Clinical Intelligence Frontend

Professional frontend prototype for the **AI-Driven Multi-Disease Prediction & Real-Time Patient Telemetry System with Explainable AI (XAI)** major project.

## Included

- Hospital/clinical operations dashboard
- Patient registry and search
- Real-time telemetry workspace
- ECG-style waveform
- HR, BP, SpO₂ and temperature monitoring
- Multi-disease risk vectors
- MEEN model diagnostics
- SHAP-style feature contribution UI
- LIME-style patient explanation
- Alert & triage queue with acknowledgement
- Clinical activity feed
- Dark/light mode
- Responsive UI
- Simulated live telemetry
- Demo data; no API keys required

## Run

Requires Node.js 18+.

```bash
git clone https://github.com/shivamkumar71/AI_Desease.git
cd AI_Desease
npm install
npm run dev
```

Open the Vite URL, normally `http://localhost:5173`.

Production:

```bash
npm run build
npm run preview
```

## Architecture target

```text
Clinical history + IoT telemetry
          ↓
Kalman / EWMA filtering
          ↓
MEEN inference
(CatBoost + XGBoost + calibrated MLP)
          ↓
Platt / Isotonic calibration
          ↓
Disease risk vectors
          ↓
SHAP + LIME explanations
          ↓
SYS.LIVE clinical dashboard
```

The current repository is **frontend-only**. Demo data and simulated telemetry are used so the complete interface can be reviewed before connecting the real ML/API/data layers.

## Planned integration

The UI can later consume real APIs for patient records, telemetry streams, MEEN inference, calibrated probabilities, SHAP/LIME outputs, alerts, and persistence.

## Safety

This is an educational prototype. All patient data in the frontend is fictional/demo data. It is not a medical device and must not be used for diagnosis, triage, or treatment decisions.

## License

MIT
