import React, { useState, useEffect, useRef } from "react";

const menuItems = ["Home", "About", "Services", "Contact"];

const Scrollbar = () => {
    const [activeMenu, setActiveMenu] = useState("Home");
    const messageRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentMessage = messageRef.current.textContent;
            const activeItem = menuItems.find((item) =>
                currentMessage.includes(item)
            );
            if (activeItem) {
                setActiveMenu(activeItem);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = (item) => {
        setActiveMenu(item);
    };

    return (
        <div>
            <div>
                {menuItems.map((item) => (
                    <div
                        key={item}
                        onClick={() => handleClick(item)}
                        className={activeMenu === item ? "active" : ""}
                    >
                        {item}
                    </div>
                ))}
            </div>
            <div ref={messageRef}>This is the message box content.</div>
        </div>
    );
};

export default Scrollbar;
