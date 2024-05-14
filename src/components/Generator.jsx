import React, { useEffect, useState } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import { Tooltip } from '@mui/material';
// import Tooltip from "@material-ui/core/Tooltip";


function Generator() {


    const [options, setOptions] = useState(
        [
            { title: 'Uppercase', state: true },
            { title: 'Lowercase', state: false },
            { title: 'Symbols', state: true },
            { title: 'Numbers', state: false }
        ]
    );

    const [length, setLength] = useState(8);

    const [copied, setCopied] = useState(false);


    const [generatedPass, setGeneratedPass] = useState(';');


    const generatePass = () => {
        let charSet = '',
            generatedPassword = ''

        const selectedOptions = options.filter((checkbox) => checkbox.state)

        selectedOptions.forEach((option) => {
            switch (option.title) {
                case 'Uppercase':
                    charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
                    break
                case 'Lowercase':
                    charSet += 'abcdefghijklmnopqrstuvwxyz'
                    break
                case 'Numbers':
                    charSet += '0123456789'
                    break
                case 'Symbols':
                    charSet += '!@#$%^&*()_+~`|}{[]\:;?><,./=-'
                    break
                default:
                    break
            }
        })

        for (let i = 0, n = charSet.length; i < length; ++i) {
            generatedPassword += charSet.charAt(Math.floor(Math.random() * n))
        }

        // console.log(generatedPassword);
        setGeneratedPass(generatedPassword)
        // console.log(charSet);
    }



    useEffect(() => {
        // console.log('changes');
        generatePass()
    }, [options, length]);



    const handleCheckboxChange = (index) => {

        const selectedOptions = options.filter((checkbox) => checkbox.state)



        if (selectedOptions.length <= 1 && options[index].state === true) {
            return
        }


        const updatedOptions = [...options]
        updatedOptions[index].state = !updatedOptions[index].state
        setOptions(updatedOptions)
    }



    const copyPassword = async () => {
        try {
            await navigator.clipboard.writeText(generatedPass);
            // console.log('Content copied to clipboard');

            setCopied(true)
            setTimeout(() => {
                setCopied(false)
            }, 2000)


        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }


    return (
        <div className='bg-[#272727]  rounded-lg self-center justify-self-center w-96 max-vsm:w-[90%] px-6 py-7'>

            <h1 className='text-2xl font-semibold text-white'>Generate</h1>
            {/* Input field */}
            <div className='border border-gray-300 rounded-md py-2 px-3 mt-4 bg-white flex justify-between items-center'>
                <h1>{generatedPass}</h1>
                {/* <ContentCopyIcon fontSize='small' /> */}
                {!copied && <Tooltip title='Copy Password'>
                    <button className='flex items-center' onClick={copyPassword}><ContentCopyIcon fontSize='small' /></button>
                </Tooltip>}
                {copied && <Tooltip title='Password Copied'>
                    <CheckIcon fontSize='small' />
                </Tooltip>}
            </div>



            <div className="w-full flex flex-col items-start mt-3">
                <label className="font-semibold mb-2 text-sm min-w-[30%] text-white">Length: {length}</label>
                <input
                    type="range"
                    min={4}
                    max={30}
                    value={length}
                    onChange={(e) => { setLength(e.target.value) }}
                    className="w-full"
                    style={{
                        background: `linear-gradient(to right, #6366F1 0%, #6366F1 ${((length - 4) / (30 - 4)) * 100}%, #e5e7eb ${((length - 4) / (30 - 4)) * 100}%, #e5e7eb 100%)`,
                        height: '6px',
                        borderRadius: '10px',
                        appearance: 'none',
                        outline: 'none',
                    }}
                />

                <style jsx='true'>{`
    input[type='range']::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      height: 16px;
      width: 16px;
      background: #6366f1;
      border-radius: 50%;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    input[type='range']::-webkit-slider-thumb:hover {
      background: #4338ca;
    }

    input[type='range']::-moz-range-thumb {
      height: 16px;
      width: 16px;
      background: #6366f1;
      border-radius: 50%;
      cursor: pointer;
    }

    input[type='range']::-moz-range-track {
      background: transparent;
    }

    input[type='range']::-ms-thumb {
      height: 16px;
      width: 16px;
      background: #6366f1;
      border-radius: 50%;
      cursor: pointer;
    }

    input[type='range']::-ms-track {
      background: transparent;
    }
  `}</style>
            </div>


            <div className="checkBoxes flex flex-wrap mt-4 gap-2 justify-between items-center">
                {options.map((checkbox, index) => {
                    return <div key={index} className='min-w-[40%] flex justify-between items-center'>
                        <label className='font-semibold text-white'>{checkbox.title}</label>
                        <input className='w-4 h-4  bg-gray-100 border-gray-300 text-white ' type="checkbox" checked={options[index].state} onChange={() => handleCheckboxChange(index)} />
                    </div>
                })}
            </div>


            <button className='bg-[#ff7700] hover:shadow-2xl text-white font-bold py-2 px-4 rounded text-center w-full mt-4 transition-all' onClick={generatePass}>Generate Next</button>
            {/* <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center w-full mt-4'>Save Password</button> */}


        </div>
    )
}

export default Generator