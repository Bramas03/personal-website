import React, { useState } from 'react';

const ReadMoreReadLess = ({ text, maxLength = 300 }) => {
    // State to control whether the full text is shown or not
    const [isExpanded, setIsExpanded] = useState(false);

    // Toggle the expanded state
    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    // Determine whether to show the full text or a truncated version
    const displayedText = isExpanded ? text : `${text.slice(0, maxLength)}...`;

    return (
        <div>
            <p>{displayedText}</p>
            <button class="text-green-500 hover:text-decoration-line"onClick={toggleReadMore}>
                {isExpanded ? 'Read Less' : 'Read More'}
            </button>
        </div>
    );
};

export default ReadMoreReadLess;
