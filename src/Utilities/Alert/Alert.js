import React, { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import "./Alert.css";

function AppAlert(props) {
    const { variant, message, onClose, title } = props;
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Trigger the show transition when the component mounts
        setVisible(true);

        // Optional: Automatically hide the alert after a delay
        const timer = setTimeout(() => {
            setVisible(false);
            if (onClose) onClose();
        }, 3000); // Hide after 5 seconds
        return () => clearTimeout(timer); // Cleanup on unmount
    }, [onClose]);

    const handleDismiss = () => {
        setVisible(false);
        if (onClose) onClose(); // Notify parent if there's an onClose handler
    };

    return (
        <div className={`alert-container-01 ${visible ? 'show' : 'hide'}`}>
            <Alert variant={variant} dismissible onClose={handleDismiss}>
                {title ? <Alert.Heading>{title}</Alert.Heading> : null}
                {message}
            </Alert>
        </div>
    );
}

export default AppAlert;