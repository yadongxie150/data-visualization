import {useRef, useState, useEffect} from 'react';

export default (loading, delay) => {
    // 和render无关的属性可以用useRef来保存
    const timer = useRef(null);
    // setState转到useState
    const [delayed, setDelayed] = useState(false);
    // 生命周期核心部分用useEffect
    useEffect(
        () => {
            if (loading) {
                timer.current = setTimeout(() => setDelayed(true), delay);
            }

            // 清理的逻辑在这里返回
            return () => clearTimeout(timer.current);
        },
        // componentDidUpdate里的if对应的属性在这里传
        [loading]
    );

    return delayed;
};
