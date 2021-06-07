import React, { useState, useEffect, useCallback } from 'react';
import Counter from './PlaygroundChildComponent';



export default function TestPassing() {   
    const [count, setCount] = useState(0);

    const callback = useCallback((count) => {
    setCount(count);
    }, []);
    
            return (
                <>
                <h3>Found Money Roadmap Data Entry</h3>
                <Counter parentCallback={callback} />
                <h2>count {count}</h2>
                
                 
                </>        
              );
}
