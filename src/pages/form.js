import React from 'react';
import html2pdf from 'html2pdf.js'
import { useNavigate } from 'react-router-dom';

export default function Form() {
  const history = useNavigate();
  const [state, setState] = React.useState({
      firstName: 'John',
      lastName: 'Doe',
      job: 'Job Now',
      jobDesc: 'Your Job Description in your position',
      pob: 'New York',
      dob: '12-05-1992',
      gender: '',
      religion: '',
      email: 'johndoe@gmail.cm',
      phoneNumber: '089567342122',
      year1: '2',
      skill1: 'Back End Developer',
      tool1: 'Java, PHP, VScode',
      year2: '1',
      skill2: 'Skill 2',
      tool2: 'Tools 2', 
      language1: 'English',
      language11: 'Active',
      language2: 'Language 2',
      language22: 'Select One',
      education1: 'Oxford University',
      startyear1: '2015',
      endyear1: '2018',
      major1: 'Information Technology',
      education2: 'Education 2',
      startyear2: 'Start year',
      endyear2: 'End year',
      major2: 'Major',
      position1: 'Front End Developer',
      startwork1: '2020',
      endwork1: '2021',
      company1: 'Google',
      position2: 'Position 2',
      startwork2: 'Start year',
      endwork2: 'End Year',
      company2: 'Company',
    })

    const [img, setImg] = React.useState();
    const [workExp, setWorkExp] = React.useState(false);
    const [addSkill, setAddSkill] = React.useState(false);
    const [addLanguage, setAddLanguage] = React.useState(false);
    const [addEducation, setAddEducation] = React.useState(false);
    const [addWork, setAddWork] = React.useState(false);

    const onImageChange = (e) => {
        const [file] = e.target.files;
        setImg(URL.createObjectURL(file));
    };

    function handleSkill() {
        if(addSkill === false) {
            setAddSkill(true);
        } else {
            setAddSkill(false);
        }
    }

    function handleLanguage() {
        if(addLanguage === false) {
            setAddLanguage(true);
        } else {
            setAddLanguage(false);
        }
    }

    function handleEducation() {
        if(addEducation === false) {
            setAddEducation(true);
        } else {
            setAddEducation(false);
        }
    }
    
    function handleWork() {
        if(addWork === false) {
            setAddWork(true);
        } else {
            setAddWork(false);
        }
    }
  
    function saveAsPdf() {
        html2pdf(document.getElementById('resume'), {
            margin: [0.1, 0.1, 0.1, 0.1],
            filename: 'CV-' + state.firstName + '-' + state.lastName + '.pdf',
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        })
    }

    function handleBack() {
        history(-1);
    }

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.value });

        if(event.target.name === 'dob') {
            let val = event.target.value;
            let date = val.split('-');
            return setState({ ...state, [event.target.name]: date[2] + '-' + date[1] + '-' + date[0] });
        }

        if(event.target.name === 'work') {
            if(event.target.value === 'exp') {
                return setWorkExp(true);
            } else {
                return setWorkExp(false);
            }
        }
    }

    // function handleClick() {
    //     history('/form');
    // }

    // const handleSubmit = (event) => {
    //     console.log(state)
    //     history.push({
    //         pathname: '/resume',
    //         state: state // your data array of objects
    //     })
    // }

  return (
    <div className='container pt-10'>
        <div className='ml-3 flex flex-row justify-between'>
            <button className='bg-primary w-10 h-10 text-white rounded-full flex flex-row items-center justify-center' onClick={handleBack} >
                <i class="ri-arrow-left-s-line text-2xl"></i>
            </button>
            <div class="flex md:hidden p-3 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                <span class="font-medium">For better experience open on desktop</span>
            </div>
        </div>
        <div className="flex">
            <div className="w-full md:basis-1/3 h-full p-3">
                <form>
                    <h6>Profile</h6>
                    <div className="grid grid-cols-2 gap-3">
                        <input onChange={handleChange} placeholder='First Name' type="text" className="form-control mb-3" id="firstName" name="firstName" />
                        <input onChange={handleChange} placeholder='Last Name' type="text" className="form-control mb-3" id="lastName" name="lastName" />
                    </div>
                    <input onChange={handleChange} placeholder='Place of Birth' type="text" className="form-control mb-3" id="pob" name='pob' />
                    <input onChange={handleChange} placeholder='Date of Birth (DD-MM-YYYY)' type="date" className="form-control mb-3" id="dob" name='dob' />
                    <div onChange={handleChange} className="mb-3">
                        <input type="radio" value="fg" name="work"/> Fresh Graduate <span className='mr-2' />
                        <input type="radio" value="exp" name="work"/> Experience
                    </div>
                    {
                        workExp ?
                        <>
                            <input onChange={handleChange} placeholder='Job Now' type="text" className="form-control mb-3" id="job" name='job' />
                            <textarea onChange={handleChange} placeholder='Job Desc' type="text" className="form-control mb-3" id="jobDesc" name='jobDesc' />
                        </> : null
                    }
                    
                    {/* <select defaultValue={state.gender} onChange={handleChange} className="custom-select form-control mb-3" id="gender" name="gender">
                        <option value='default' selected>Gender...</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <select defaultValue={state.religion} onChange={handleChange} className="custom-select form-control mb-3" id="religion" name="religion">
                        <option value='default' selected>Religion...</option>
                        <option value="Muslim">Muslim</option>
                        <option value="Christianity">Christianity</option>
                        <option value="Hindus">Hindus</option>
                        <option value="Buddhist">Buddhist</option>
                    </select> */}
                    <h6 className='mt-4'>Photo</h6>
                    <input className='border-1 rounded-sm w-full border-gray-300' type="file" onChange={onImageChange} />

                    <h6 className='mt-4'>Contact</h6>
                    <input onChange={handleChange} placeholder='Email' type="email" className="form-control mb-3" id="email" name="email" />
                    <input onChange={handleChange} placeholder='Phone Number' type="number" className="form-control mb-3" id="phoneNumber" name="phoneNumber" />
                
                    <div className='flex flex-row mt-4 mb-2'>
                        <span className='mr-2 font-medium'>Skill</span>
                        {
                            addSkill ? 
                            <i class="ri-indeterminate-circle-fill text-amber-500" onClick={handleSkill}></i> : 
                            <i class="ri-add-circle-fill text-primary" onClick={handleSkill}></i> 
                        }
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <input onChange={handleChange} placeholder='Skill 1 (UI/UX)' type="text" className="form-control mb-3" id="skill1" name="skill1" />
                        <input onChange={handleChange} placeholder='2 Years' type="number" className="form-control mb-3" id="year1" name="year1" />
                    </div>
                    <textarea onChange={handleChange} placeholder='Tools (Figma, Adobe)' type="text" className="form-control mb-3" id="tool1" name="tool1" />
                    {
                        addSkill ?
                        <>
                            <div className="grid grid-cols-2 gap-3">
                                <input onChange={handleChange} placeholder='Skill 2 (WEBDEV)' type="text" className="form-control mb-3" id="skill2" name="skill2" />
                                <input onChange={handleChange} placeholder='1 Years' type="number" className="form-control mb-3" id="year2" name="year2" />
                            </div>
                            <textarea onChange={handleChange} placeholder='Tools (JS, HTML, CSS)' type="text" className="form-control mb-3" id="tool2" name="tool2" />
                        </> : null
                    }

                    <div className='flex flex-row mt-4 mb-2'>
                        <span className='mr-2 font-medium'>Languange</span>
                        {
                            addLanguage ? 
                            <i class="ri-indeterminate-circle-fill text-amber-500" onClick={handleLanguage}></i> : 
                            <i class="ri-add-circle-fill text-primary" onClick={handleLanguage}></i> 
                        }
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <input onChange={handleChange} placeholder='Language 1' type="text" className="form-control mb-3" id="language1" name='language1' />
                        <select onChange={handleChange} defaultValue="" className="custom-select form-control mb-3" id="language11" name="language11">
                            <option value="" disabled>Select One...</option>
                            <option value="Passive">Passive</option>
                            <option value="Active">Active</option>
                        </select>
                    </div>
                    {
                        addLanguage ? 
                        <div className="grid grid-cols-2 gap-3">
                            <input onChange={handleChange} placeholder='Language 2' type="text" className="form-control mb-3" id="language2" name='language2' />
                            <select onChange={handleChange} defaultValue="" className="custom-select form-control mb-3" id="language22" name="language22">
                                <option value="" disabled>Select One...</option>
                                <option value="Passive">Passive</option>
                                <option value="Active">Active</option>
                            </select>
                        </div> : null
                    }
                    
                    <div className='flex flex-row mt-4 mb-2'>
                        <span className='mr-2 font-medium'>Education</span>
                        {
                            addEducation ? 
                            <i class="ri-indeterminate-circle-fill text-amber-500" onClick={handleEducation}></i> : 
                            <i class="ri-add-circle-fill text-primary" onClick={handleEducation}></i> 
                        }
                    </div>
                    <input onChange={handleChange} placeholder='Education 1 (Oxford University)' type="text" className="form-control mb-3" id="education1" name="education1" />
                    <div className="grid grid-cols-2 gap-3">
                        <input onChange={handleChange} placeholder='Start Year' type="number" className="form-control mb-3" id="startyear1" name="startyear1" />
                        <input onChange={handleChange} placeholder='End Year' type="number" className="form-control mb-3" id="endyear1" name="endyear1" />
                    </div>
                    <input onChange={handleChange} placeholder='Major (Bachelor of Informatic Engineering)' type="text" className="form-control mb-3" id="major1" name="major1" />
                    {
                        addEducation ?
                        <>
                            <input onChange={handleChange} placeholder='Education 2 (Oxford University)' type="text" className="form-control mb-3" id="education2" name="education2" />
                            <div className="grid grid-cols-2 gap-3">
                                <input onChange={handleChange} placeholder='Start Year' type="number" className="form-control mb-3" id="startyear2" name="startyear2" />
                                <input onChange={handleChange} placeholder='End Year' type="number" className="form-control mb-3" id="endyear2" name="endyear2" />
                            </div>
                            <input onChange={handleChange} placeholder='Major (Bachelor of Informatic Engineering)' type="text" className="form-control mb-3" id="major2" name="major2" />
                        </> : null
                    }

                    <div className='flex flex-row mt-4 mb-2'>
                        <span className='mr-2 font-medium'>Experience</span>
                        {
                            addWork ? 
                            <i class="ri-indeterminate-circle-fill text-amber-500" onClick={handleWork}></i> : 
                            <i class="ri-add-circle-fill text-primary" onClick={handleWork}></i> 
                        }
                    </div>
                    <input onChange={handleChange} placeholder='Position 1' type="text" className="form-control mb-3" id="position1" name="position1" />
                    <div className="grid grid-cols-2 gap-3">
                        <input onChange={handleChange} placeholder='Start Year' type="number" className="form-control mb-3" id="startwork1" name="startwork1" />
                        <input onChange={handleChange} placeholder='End Year' type="number" className="form-control mb-3" id="endwork1" name="endwork1" />
                    </div>
                    <input onChange={handleChange} placeholder='Company 1' type="text" className="form-control mb-3" id="company1" name="company1" />
                    {
                        addWork ?
                        <>
                            <input onChange={handleChange} placeholder='Position 2' type="text" className="form-control mb-3" id="position2" name="position2" />
                            <div className="grid grid-cols-2 gap-3">
                                <input onChange={handleChange} placeholder='Start Year' type="number" className="form-control mb-3" id="startwork2" name="startwork2" />
                                <input onChange={handleChange} placeholder='End Year' type="number" className="form-control mb-3" id="endwork2" name="endwork2" />
                            </div>
                            <input onChange={handleChange} placeholder='Company 2' type="text" className="form-control mb-3" id="company2" name="company2" />
                        </> : null
                    }
                </form>
                {/* <h3 className='flex md:hidden'>
                    <button
                        className='btn btn-primary mt-3'
                        to={{
                            pathname: '/resume',
                            state: state
                        }}
                        onClick={saveAsPdf}
                    >
                       Save to PDF
                    </button>
                </h3> */}
                <button class="bg-primary text-white py-2 px-3 rounded inline-flex md:hidden items-center" onClick={saveAsPdf}>
                    <i class="ri-download-line mr-2"></i>
                    <span>Download</span>
                </button>
            </div>
            <div className="basis-2/3 hidden md:flex flex-col">
                <h3 className='text-center'>Preview</h3>
                <div id="resume" className="relative mx-auto border-2 border-gray-600 pt-3" style={{width: '795px', height: '1030px'}}>
                    <div className='absolute right-5 text-right'>
                        {/* <h1 class="text-3xl font-semibold text-gray-800 text-right capitalize lg:text-4xl dark:text-white0">Curriculum<br />Vitae</h1> */}
                        {/* <div class="-mt-2">
                            <span class="inline-block w-1 h-1 rounded-full bg-blue-500"></span>
                            <span class="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                            <span class="inline-block w-20 h-1 ml-1 rounded-full bg-blue-500"></span>
                        </div> */}
                    </div>
                    <div className='p-3'>
                        <div className="flex flex-row justify-between items-center mb-3">
                            <div >
                                <h2 className='text-5xl font-semibold mb-4'>
                                    {state.firstName} 
                                    <span className="font-light mr-3">
                                        {" " + state.lastName}
                                    </span>
                                </h2>
                                <h4 className="font-light text-sm font-sans text-gray-400">{state.pob} , {state.dob}</h4>
                                <h4 className="font-light text-sm font-sans text-gray-400">{state.email} | {state.phoneNumber}</h4>
                            </div>
                            {
                                img === undefined 
                                ? <i class="ri-user-3-line text-8xl mr-3 text-white bg-slate-400 w-40 h-40 rounded-full inline-flex items-center justify-center"></i>
                                : <img src={img} className=' border-2 mr-3 border-slate-200  object-cover w-40 h-40 rounded-full' alt="" />
                            }
                        </div>

                        {
                            workExp ?
                            <>
                                <div className="font-semibold mt-2">{state.job}</div>
                                <h4 className="font-light mt-1">{state.jobDesc}</h4>
                            </> : null
                        }

                        <div className="grid grid-cols-2 gap-5 mt-5">
                            <div>
                                <span className="font-semibold">Skill</span>
                                <div className="grid grid-cols-6 gap-4">
                                    <div className="text-blue-400 text-xs mt-1 w-14">
                                        + {state.year1} Years
                                    </div>
                                    <div className="col-span-5 text-blue-900 ml-4">
                                        {state.skill1}
                                        <p className="text-xs text-gray-400">
                                            {state.tool1}
                                        </p>
                                    </div>
                                </div>
                                {
                                    addSkill ?
                                    <div className="grid grid-cols-6 gap-4">
                                        <div className="text-blue-400 text-xs mt-1 w-14">
                                            + {state.year2} Years
                                        </div>
                                        <div className="col-span-5 text-blue-900 ml-4">
                                            {state.skill2}
                                            <p className="text-xs text-gray-400">
                                                {state.tool2}
                                            </p>
                                        </div>
                                    </div> : null
                                }
                            </div>
                            <div>
                                <span className="font-semibold">Language</span>
                                <div className="text-blue-900 mt-2">
                                    {state.language1}
                                    <p className="text-xs text-gray-400">
                                        {state.language11}
                                    </p>
                                </div>
                                {
                                    addLanguage ?
                                    <div className="text-blue-900">
                                        {state.language2}
                                        <p className="text-xs text-gray-400">
                                            {state.language22}
                                        </p>
                                    </div> : null
                                }
                            </div>
                        </div>


                        <div className="font-semibold mt-2">Education</div>
                        <div className="mt-3 ml-3">
                            <ol className="relative border-l border-gray-200 dark:border-gray-700">
                                <li className="mb-10 ml-6">
                                    <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                        <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                                    </span>
                                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">{state.education1}</h3>
                                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{state.startyear1} - {state.endyear1}</time>
                                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400">{state.major1}</p>
                                </li>
                                {
                                    addEducation ?
                                    <li className="mb-10 ml-6">
                                        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                            <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                                        </span>
                                        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">{state.education2}</h3>
                                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{state.startyear2} - {state.endyear2}</time>
                                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">{state.major2}</p>
                                    </li> : null
                                }
                            </ol>
                        </div>

                        <div className="font-semibold mt-2">Experience</div>
                        <div className="mt-3 -ml-7">
                            <ol className="items-center sm:flex">
                                <li className="relative mb-6 sm:mb-0">
                                    <div className="flex items-center">
                                        <div className="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                            <svg className="w-3 h-3 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                                        </div>
                                        <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                    </div>
                                    <div className="mt-3 sm:pr-8">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{state.position1}</h3>
                                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{state.startwork1 + "-" + state.endwork1}</time>
                                        <p className="text-xs font-normal text-gray-500 dark:text-gray-400">{state.company1}</p>
                                    </div>
                                </li>
                                {
                                    addWork ? 
                                    <li className="relative mb-6 sm:mb-0">
                                        <div className="flex items-center">
                                            <div className="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                                <svg className="w-3 h-3 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                                            </div>
                                            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                        </div>
                                        <div className="mt-3 sm:pr-8">
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{state.position2}</h3>
                                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{state.startwork2 + "-" + state.endwork2}</time>
                                            <p className="text-xs font-normal text-gray-500 dark:text-gray-400">{state.company2}</p>
                                        </div>
                                    </li> : null
                                }
                            </ol>
                        </div>
                    </div>
                    {/* <div className='absolute bottom-0 bg-blue-300 w-full px-20 text-center h-10 flex flex-col justify-center'>
                        <div className="flex flex-row justify-center items-center">
                            <span className='text-xs mb-2'>@gilarromadhon</span>
                        </div>
                    </div> */}
                </div>
                <div className='mx-auto mt-5'>
                    <button class="bg-primary text-white py-2 px-3 rounded inline-flex items-center" onClick={saveAsPdf}>
                        <i class="ri-download-line mr-2"></i>
                        <span>Download</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}
