import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const countdownDate = new Date('2025-01-01T00:00:00').getTime();
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ backgroundColor: '#00', padding: '20px', color: '#fff', textAlign: 'center' }}>
            <h2 className="text-4xl font-bold text-white mb-8">Maha Kumbh 2k25</h2>
            <div style={{ fontSize: '2rem', display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <div>
                    <span style={{ display: 'block', fontSize: '3rem' }}>{timeLeft.days || '0'}</span>
                    <span>Days</span>
                </div>
                <div>
                    <span style={{ display: 'block', fontSize: '3rem' }}>{timeLeft.hours || '0'}</span>
                    <span>Hours</span>
                </div>
                <div>
                    <span style={{ display: 'block', fontSize: '3rem' }}>{timeLeft.minutes || '0'}</span>
                    <span>Minutes</span>
                </div>
                <div>
                    <span style={{ display: 'block', fontSize: '3rem' }}>{timeLeft.seconds || '0'}</span>
                    <span>Seconds</span>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;
