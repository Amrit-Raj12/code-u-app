import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'


import 'codemirror/theme/ayu-dark.css'
import 'codemirror/theme/3024-day.css'
import 'codemirror/theme/3024-night.css'
import 'codemirror/theme/abbott.css'
import 'codemirror/theme/abcdef.css'
import 'codemirror/theme/ambiance.css'
import 'codemirror/theme/ayu-mirage.css'
import 'codemirror/theme/base16-light.css'
import 'codemirror/theme/base16-dark.css'
import 'codemirror/theme/bespin.css'
import 'codemirror/theme/blackboard.css'
import 'codemirror/theme/cobalt.css'
import 'codemirror/theme/colorforth.css'
import 'codemirror/theme/dracula.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'

if (typeof navigator !== "undefined") {
    require("codemirror/mode/xml/xml");
    require("codemirror/mode/css/css");
    require("codemirror/mode/javascript/javascript")
}

import { Controlled } from 'react-codemirror2';

const Editor = (props) => {
    const {
        language,
        displayName,
        value,
        onChange,
        themeValue,
        theme
    } = props

    const [open, setOpen] = useState(true)

    const handleChange = (editor, date, value) => {
        onChange(value);
    }
    return (
        <div className={`editor-container ${open ? '' : 'collapsed'} ${theme ? '' : 'theme-light'}`}>
            <div className='editor-title'>
                {displayName}
                <button type='button' className='expand-collapse-btn' onClick={() => setOpen(prevOpen => !prevOpen)}>
                    <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
                </button>
            </div>
            <Controlled
                onBeforeChange={handleChange}
                value={value}
                className='code-mirror-wrapper'
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    lineNumbers: true,
                    theme: `${themeValue ? themeValue : 'ayu-dark'}`
                }}
            />
        </div>
    )
}

export default Editor