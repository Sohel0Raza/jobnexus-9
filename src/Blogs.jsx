import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold text-primary text-center py-5 md:py-10'>All Question Answer</h2>
            <div className='w-10/12 mx-auto space-y-2'>
                <li>What is ContextAPI ?
                    <p>Ans: The ReactContext API is a way to create global variables that props can pass around. This is the method of "prop drilling" or passing from grandparents to the child's parents
                    </p>
                </li>
                <li> What is Custom Hook ?
                    <p>Ans: Custom Hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.</p>
                </li>
                <li>What is useRef() ?
                    <p>Ans: The UseRef Hook allows you to persist values between renders.
                        It can be used to store a mutable value that does not have to be re-rendered when updating.
                        It can be used to directly access a DOM element
                    </p>
                </li>
                <li>What is useMemo() ?
                    <p>Ans: useMemo is a React Hook that lets you cache the result of a calculation between re-renders and return a memoized value.</p>
                </li>
            </div>
        </div>
    );
};

export default Blogs;