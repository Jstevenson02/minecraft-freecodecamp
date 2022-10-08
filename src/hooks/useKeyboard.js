import { useCallback, useEffect, useState } from 'react';

function actionByKey(key) {
        const keyActionMap = {
                KeyW: 'moveForward',
                KeyA: 'moveLeft',
                KeyS: 'moveBackward',
                KeyD: 'moveRight',
                Space: 'jump',
                Digit1: 'dirt',
                Digit2: 'grass',
                Digit3: 'glass',
                Digit4: 'wood',
                Digit5: 'log',
        };
        return keyActionMap[key];
}

export const useKeyboard = () => {
        const [actions, setActions] = useState({
                moveForwardd: false,
                moveBackward: false,
                moveLeft: false,
                moveRight: false,
                texture1: false,
                texture2: false,
                texture3: false,
                texture4: false,
                texture5: false,
        });

        const handleKeyDown = useCallback((e) => {
                const action = actionByKey(e.code);
                if (action) {
                        setActions((prev) => {
                                return {
                                        ...prev,
                                        [action]: true,
                                };
                        });
                }
        }, []);

        const handleKeyUp = useCallback((e) => {
                const action = actionByKey(e.code);
                if (action) {
                        setActions((prev) => {
                                return {
                                        ...prev,
                                        [action]: false,
                                };
                        });
                }
        }, []);

        useEffect(() => {
                document.addEventListener('keydown', handleKeyDown);
                document.addEventListener('keyup', handleKeyUp);

                return () => {
                        document.removeEventListener('keydown', handleKeyDown);
                        document.removeEventListener('keyup', handleKeyUp);
                };
        }, [handleKeyDown, handleKeyUp]);

        return actions;
};