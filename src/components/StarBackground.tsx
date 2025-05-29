import React, { useEffect, useState } from "react";

const STAR_COUNT = 40;
const STAR_COLORS = ["#ffe066", "#fff3bf", "#ffd700", "#fff9db"];

function getRandom(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const StarBackground: React.FC = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // bodyにdarkクラスがついているかで判定
        const checkDark = () => setIsDark(document.body.classList.contains("dark"));
        checkDark();
        const observer = new MutationObserver(checkDark);
        observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
        return () => observer.disconnect();
    }, []);

    if (!isDark) return null;

    return (
        <div
        aria-hidden="true"
        style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 0,
        }}
        >
        {Array.from({ length: STAR_COUNT }).map((_, i) => {
            const size = getRandom(2, 5);
            const left = getRandom(0, 100);
            const top = getRandom(0, 100);
            const duration = getRandom(2, 5);
            const delay = getRandom(0, 3);
            const color = STAR_COLORS[Math.floor(getRandom(0, STAR_COLORS.length))];
            return (
            <span
                key={i}
                style={{
                position: "absolute",
                left: `${left}%`,
                top: `${top}%`,
                width: size,
                height: size,
                background: color,
                borderRadius: "50%",
                boxShadow: `0 0 ${size * 2}px ${color}`,
                opacity: 0.8,
                filter: "blur(0.5px)",
                animation: `starTwinkle ${duration}s infinite`,
                animationDelay: `${delay}s`,
                }}
            />
            );
        })}
        <style>{`
            @keyframes starTwinkle {
            0%, 100% { opacity: 0.7; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.3); }
            }
        `}</style>
        </div>
    );
};

export default StarBackground; 