import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./CustomCursor.css";

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", updateMousePosition);
        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    return (
        <motion.div
            className="custom-cursor"
            animate={{
                left: mousePosition.x,
                top: mousePosition.y,
            }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
            }}
        />
    );
};

export default CustomCursor;
