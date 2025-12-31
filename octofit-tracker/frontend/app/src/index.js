


const root = ReactDOM.createRoot(document.getElementById('root'));
    // Ensure environment variable is available for all components
    console.log("REACT_APP_CODESPACE_NAME:", process.env.REACT_APP_CODESPACE_NAME);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
