import React, { useState } from 'react';
import ImageSlider from '../components/Slider'
import BlinkingNews from '../components/Blink'
import './styles/styles.css'
import imgAbout from '../asset/about.jpg'
import { NavLink } from 'react-router-dom';
import Toolbar from './Toolbar';
import Header from './Header';
import myImage from '../asset/myImage.jpeg';
import g1 from '../asset/slide1.jpeg';
import g2 from '../asset/slide2.jpeg';
import g3 from '../asset/slide3.jpeg';
import Footer from './Footer';
import MCLogo from '../asset/media_center_logo.png'
import { useNavigate } from 'react-router-dom/dist';
import { width } from '@fortawesome/free-solid-svg-icons/fa0';
import Image1 from '../asset/home_slider_1.jpg';
import Image2 from '../asset/home_slider_2.jpg';
import Image3 from '../asset/home_slider_3.jpg';
import Course1 from '../asset/c1.pdf'
import Course2 from '../asset/c2.pdf'
import Course3 from '../asset/c3.pdf'
import Course4 from '../asset/c4.pdf'
import Course5 from '../asset/c5.pdf'
import Certificates from '../asset/certificate.pdf'
import DisasterImage from '../asset/disaster_management.jpg'
import AnnualReport1 from '../asset/annual_report_1.pdf'
import AnnualReport2 from '../asset/annual_report_2.pdf'
import course1 from '../asset/c1.pdf'
import course2 from '../asset/c2.pdf'
import course3 from '../asset/c3.pdf'
import course4 from '../asset/c4.pdf'
import Gif from '../asset/newicon.gif'
import course5 from '../asset/c5.pdf'
import './main.css'
import ScriptWritingDay from '../asset/Script seminar/scriptSeminar1.jpg'
import DigitalEd from '../asset/Digital Education/digitaled (9).jpeg'
import Refresher from '../asset/refresher/Refresher (7).jpeg'
import Film from '../asset/film screening/film (3).jpeg'
import Students from '../asset/Student activities/students (2).jpeg'
import Announcement1 from '../News/Announcement1.pdf'
import Announcement2 from '../News/Announcement2.pdf'
import Announcement3 from '../News/Announcement3.pdf'
import Announcement4 from '../News/Announcement4.pdf'
import MaSyllabus from '../asset/ma_syllabus.pdf'
import Ma_ordinance from '../asset/ma_ordinance.pdf'
import Agri_banner from '../asset/Agriculture_Seminar/agriculture (1).jpg'
import Data_workshop_banner from '../asset/data_workshop/workshop (2).jpg'
import Justice_conference_banner from '../asset/justice_conference/conference (1).jpg'
import Prospectus from '../asset/Patliputra_prospectus.pdf'
import Advertisement from '../components/Admission_popup'
import Orientation from '../asset/news/pse orientation.docx'
import Induction_img from '../asset/our gallery/induction/image (1).jpeg'

import { useEffect } from 'react';

const MainContent = () => {

    const [showAd, setShowAd] = useState(true);         //for popup admission ad

    const handleCloseAd = () => {
        setShowAd(false);
    };

    const latestNews = "Important announcement: Classes will be canceled tomorrow due to inclement weather.";
    const images = [
        { url: '', caption: 'Slide 1' },
        { url: Image2, caption: 'Slide 2' },
        { url: Image3, caption: 'Slide 3' },
    ];
    const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState(0);
    const [facultyDropdownOpen, setFacultyDropdownOpen] = useState(false);
    const [pgDiplomaDropdownOpen, setPgDiplomaDropdownOpen] = useState(false);

    const toggleFacultyDropdown = () => {
        if (pgDiplomaDropdownOpen) {
            setPgDiplomaDropdownOpen(false);
        }
        setFacultyDropdownOpen(!facultyDropdownOpen);
    };

    const togglePgdDropdown = (e) => {
        e.stopPropagation(); // Stop event propagation
        setPgDiplomaDropdownOpen(!pgDiplomaDropdownOpen);
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log('Text copied to clipboard:', text);
                // You can optionally show a notification or provide feedback to the user here
            })
            .catch((error) => {
                console.error('Error copying text to clipboard:', error);
                // Handle error, if any
            });
    };

    const [announcements, setAnnouncements] = useState([
        { id: 1, message: 'Important update regarding our new product launch!' },
        { id: 2, message: 'Limited time offer! Get 20% off your next purchase.' },
    ]);



    useEffect(() => {
        const announcementInterval = setInterval(() => {
            setCurrentAnnouncementIndex((prevIndex) =>
                (prevIndex + 1) % announcements.length
            );
        }, 3000); // Change the interval time as needed (in milliseconds)

        return () => clearInterval(announcementInterval);
    }, [announcements]);

    const currentAnnouncement = announcements[currentAnnouncementIndex];


    const navigate = useNavigate();

    const ugc = () => {
        navigate('https://www.ugc.gov.in/');
    };


    const nda = useNavigate('https://nad.gov.in/ ');

    const nptel = useNavigate('https://nptel.ac.in/ ');

    const swayam = useNavigate('https://swayam.gov.in/ ');

    const swayamprabha = useNavigate('https://swayamprabha.gov.in/  ');

    const egyankosh = useNavigate('https://egyankosh.ac.in/ ');

    const inflibnet = useNavigate('https://www.inflibnet.ac.in/  ');

    const epathshala = useNavigate('https://epathshala.nic.in/');

    const isro = useNavigate('https://www.isro.gov.in/ ');

    return (
        <>
            {/* {showAd && <Advertisement onClose={handleCloseAd} />} */}

            {/* <Toolbar /> */}
            <Header />
            <main className="container py-4">
                <ul className="nav nav-pills nav-fill nav-list-style">

                    <li className="nav-item" role="presentation">
                        <div className={`dropdown ${facultyDropdownOpen ? 'show' : ''}`}>
                            <a style={{ fontWeight: 'bold' }} className="nav-link dropdown-toggle text-reset" id="contact-tab" data-bs-toggle="dropdown" href="#Facilities" role="tab" aria-controls="contact" aria-selected="false" onClick={toggleFacultyDropdown}>About Department</a>
                            <ul className="dropdown-menu" aria-labelledby="contact-tab">
                                <li><NavLink to={"/page3"} className="dropdown-item">About us</NavLink></li>
                                <li><NavLink to={"/page11"} className="dropdown-item">Vision & Mission</NavLink></li>
                                <li><NavLink to={"/page7"} className="dropdown-item">Why PSE?</NavLink></li>
                                {/* <li><NavLink to='' className="dropdown-item">Our Gallery</NavLink></li>
            <li><NavLink to=''className="dropdown-item">Founder Director</NavLink></li> */}
                                <li><NavLink to={"/page10"} className="dropdown-item">Careers</NavLink></li>
                                <li><hr className="dropdown-divider" /></li>
                            </ul>
                        </div>
                    </li>

                    <li className="nav-item" role="presentation">
                        <div className={`dropdown ${facultyDropdownOpen ? 'show' : ''}`}>
                            <a style={{ fontWeight: 'bold' }} className="nav-link dropdown-toggle text-reset" id="contact-tab" data-bs-toggle="dropdown" href="#Facilities" role="tab" aria-controls="contact" aria-selected="false" onClick={toggleFacultyDropdown}>Infrastructure</a>
                            <ul className="dropdown-menu" aria-labelledby="contact-tab">
                                <li><NavLink to={"/page13"} className="dropdown-item">Classrooms</NavLink></li>
                                <li><NavLink to={"/page13"} className="dropdown-item">Econometric Lab</NavLink></li>
                                <li><NavLink to={"/page13"} className="dropdown-item">Library</NavLink></li>
                                <li><NavLink to={"/page13"} className="dropdown-item">Data Centre</NavLink></li>
                                <li><hr className="dropdown-divider" /></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item" role="presentation">
                        <div className={`dropdown ${facultyDropdownOpen ? 'show' : ''}`}>
                            <a style={{ fontWeight: 'bold' }} className="nav-link dropdown-toggle text-reset" id="contact-tab" data-bs-toggle="dropdown" href="#Facilities" role="tab" aria-controls="contact" aria-selected="false" onClick={toggleFacultyDropdown}>Academic Program</a>
                            <ul className="dropdown-menu" aria-labelledby="contact-tab">
                                <li><a href={MaSyllabus} className="dropdown-item">M.A. in PSE</a></li>
                                <li><a href={Ma_ordinance} className="dropdown-item">M.A. Ordinance PSE</a></li>
                                {/* <li><a href="/page2" className="dropdown-item">Ph.D. in Mass communication</a></li>
                    <li><a href={Certificates} className="dropdown-item" target="_blank">Certificate Courses for Writing in Media</a></li>
                    <li  onClick={togglePgdDropdown}>
                        <a className="dropdown-item dropdown-toggle" style={{ cursor: 'pointer' }} data-bs-toggle="dropdown">PG Courses</a>
                        <ul className={`dropdown-menu ${pgDiplomaDropdownOpen ? 'show' : ''}`}>
                            <li><a href={Course5} target='_blank' className="dropdown-item">Development Communication</a></li>
                            <li><a href={Course1} target='_blank' className="dropdown-item">Online and digital journalism</a></li>
                            <li><a href={Course3} target='_blank' className="dropdown-item">Photography</a></li>
                            <li><a href={Course2} target='_blank' className="dropdown-item">Science Communication</a></li>
                            <li><a href={Course4} target='_blank' className="dropdown-item">Film Making</a></li>
                        </ul>
                    </li> */}
                                <li><hr className="dropdown-divider" /></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item" role="presentation">
                        <div className={`dropdown ${facultyDropdownOpen ? 'show' : ''}`}>
                            <a style={{ fontWeight: 'bold' }} className="nav-link dropdown-toggle text-reset" id="contact-tab" data-bs-toggle="dropdown" href="#Facilities" role="tab" aria-controls="contact" aria-selected="false" onClick={toggleFacultyDropdown}>People</a>
                            <ul className="dropdown-menu" aria-labelledby="contact-tab">
                                <li><NavLink to={"/page23"} className="dropdown-item">Academic Advisory Committee</NavLink></li>
                                <li><NavLink to={"/page4"} className="dropdown-item">Staff</NavLink></li>

                                <li><NavLink to={"/page5"} className="dropdown-item">Faculty In-Charge</NavLink></li>
                                {/*
               <li><NavLink to={"/page24"} className="dropdown-item">Consultant</NavLink></li>
            <li><NavLink to='{' className="dropdown-item">Consultant</NavLink></li>
            */}
                                <li><hr className="dropdown-divider" /></li>
                            </ul>
                        </div>
                    </li>


                    <li className="nav-item" role="presentation">
                        <div className={`dropdown ${facultyDropdownOpen ? 'show' : ''}`}>
                            <a style={{ fontWeight: 'bold' }} className="nav-link dropdown-toggle text-reset" id="contact-tab" data-bs-toggle="dropdown" href="#Facilities" role="tab" aria-controls="contact" aria-selected="false" onClick={toggleFacultyDropdown}>Annual Report</a>
                            <ul className="dropdown-menu" aria-labelledby="contact-tab">
                                {/* <li><NavLink to={AnnualReport1} target='_blank' className="dropdown-item">Annual Report 2022-23</NavLink></li> */}
                                <li><NavLink to={AnnualReport1} target='_blank' className="dropdown-item">Annual Report 2021-22</NavLink></li>
                                <li><hr className="dropdown-divider" /></li>
                            </ul>
                        </div>
                    </li>



                    <li className="nav-item" role="presentation">
                        <div className={`dropdown ${facultyDropdownOpen ? 'show' : ''}`}>
                            <a style={{ fontWeight: 'bold' }} className="nav-link dropdown-toggle text-reset" id="contact-tab" data-bs-toggle="dropdown" href="#Facilities" role="tab" aria-controls="contact" aria-selected="false" onClick={toggleFacultyDropdown}>eResource</a>
                            <ul className="dropdown-menu" aria-labelledby="contact-tab">
                                <li><a href="https://www.ugc.gov.in/" className="dropdown-item"> UGC </a></li>
                                <li><a href="https://www.nda.gov.in/" className="dropdown-item"> NDA </a></li>
                                <li><a href="https://www.nptel.ac.in/" className="dropdown-item"> NPTEL </a></li>
                                <li><a href="https://www.swayam.gov.in/" className="dropdown-item"> SWAYAM </a></li>
                                <li><a href="https://www.swayamprabhay.gov.in/" className="dropdown-item"> SWAYAM PRABHA </a></li>
                                <li><a href="https://egyankosh.ac.in/" className="dropdown-item"> EGYANKOSH </a></li>
                                <li><a href="https://www.inflibnet.ac.in/ " className="dropdown-item"> INFLIBNET </a></li>
                                <li><a href="https://epathshala.nic.in/ " className="dropdown-item"> EPATHSHALA </a></li>
                                <li><a href="https://www.isro.gov.in/" className="dropdown-item"> ISRO </a></li>

                                <li><NavLink to={"/page2"} className="dropdown-item"> </NavLink></li>
                                <li><hr className="dropdown-divider" /></li>
                            </ul>
                        </div>
                    </li>
                   <li className="nav-item" role="presentation">
    <a style={{ fontWeight: 'bold', color: 'inherit' }} className="nav-link text-reset text-decoration-none" href="#contact-section">Contact</a>
</li>

                </ul>

                <div className="tab-content" id="myTabContent">

                    <div className="tab-pane fade show tab-border active" id="home" role="tabpanel" aria-labelledby="home-tab" style={{ margin: '10px', border: 'none' }}>

                        <div className='partent' style={{}}>
                            <div className='Box-About-1' style={{ marginLeft: '-10px', width: '900px' }}>
                                <div style={{ position: 'relative', top: '13px' }}>
                                    <ImageSlider images={images} />

                                </div>

                                <div>
                                    <p style={{ paddingTop: "20px", textAlign: "justify", fontWeight: 'bold' }}>
                                        Patliputra School of Economics (PSE) was established by Bihar Government vide Cabinet decision 15@ih-09/2016-629 dated April 12, 2017.<br></br><br></br>
                                        The Centre aims to work with world class leaders, economists and people of calibre from different fields. It would undertake and facilitate academics, consultancy, research and capacity development in Economic and Economic Policy making. It would provide expert advice as a think tank at the National and State level and would establish collaborations with Academic and Research institutions.<br></br><br></br>
                                        The PSE involvement in academics would be from a perspective of guiding research, M.Phil., PhD and post graduate courses so as to enable its students and scholars to compete nationally and globally in reputation, placement, quality of mind etc. and also provide high quality teaching faculty for the State.<br></br><br></br>


                                        PSE undertakes and facilitates research and teaching of the highest possible order, ensuring that the academic environment fosters critical thinking, innovation, and excellence. Just as the School of Journalism and Mass Communication (SJMC) focuses on quality journalism education, PSE emphasizes the importance of a robust curriculum tailored to meet the needs of developing societies. This approach enriches the students’ learning experience and prepares them to contribute meaningfully to the fields of economics and policy-making.<br></br><br></br>

                                        PSE actively seeks collaborations with other academic and research institutions, both domestic and foreign. These partnerships facilitate the exchange of knowledge, foster innovation, and enhance the quality of research. By working with renowned institutions globally, PSE can leverage diverse perspectives and expertise, enriching its academic and research endeavors.<br></br><br></br>

                                        For in-depth and focused research in diverse fields of economics and its allied subjects, PSE aims to gradually develop into a multi-center institution. This expansion allows for specialized research centers dedicated to various economic disciplines, fostering a more comprehensive and nuanced understanding of economic phenomena. Similar to SJMC’s vision of harmonizing its journalism curricula with national and international standards, PSE's multi-center approach ensures that its research remains relevant and impactful.<br></br><br></br>

                                        As PSE grows and evolves, it may proceed towards obtaining university status after establishing multiple centers. This progression would enhance its academic standing and expand its capacity to contribute to the field of economics on a larger scale. By becoming a university, PSE can offer a wider range of programs, attract top-tier faculty, and engage in more extensive research initiatives, ultimately positioning itself as a leading institution in economics and policy studies.<br></br><br></br>

                                        Generating a cadre of trained human resources specialized in understanding and addressing issues related to economics is one of the critical needs of the hour, and educational institutions like PSE have to play a crucial role in this regard. The institute ensures tailored programs to meet the needs of developing societies, distinguishing itself from other institutes of economics training in the state and elsewhere, and giving a unique identity and character to its alumni.<br></br><br></br></p>
                                    {/* <p style={{ paddingTop: "20px", textAlign:"justify", fontWeight:'bold'}}>
                Journalism & Mass Communication has emerged as a major area of interest and has immensely contributed to the development & empowerment of society.
                </p>

                <p className="text-justify" style={{ paddingTop: "20px" , textAlign:"justify" , fontWeight:'bold'}}>The information technology revolution has significantly contributed to the expansion of mass media. It has also posed major challenges for students, teachers and practitioners of mass media. It is a challenge which we accept as an essential part of life at SJMC.</p>
      <p className="text-justify" style={{ paddingTop: "20px" , textAlign:"justify" , fontWeight:'bold'}}>Mass Communication is not limited to journalism alone. To a great extent mass media is a modern reality which covers all aspects of human life. Moreover, a great change can be observed in the concept of people working in mass media. Careers in Mass Communication are not only high paying but also bring in a great deal of job satisfaction and expression of creativity.</p>
      <p className="text-justify" style={{ paddingTop: "20px" , textAlign:"justify" , fontWeight:'bold'}}>Generating a cadre of trained human resources specialized in understanding and addressing issues related to mass communication is one of the critical needs of the hour, and educational institutions have to play a crucial role in this regard. The institute would ensure tailored programmes to meet the needs of developing societies. This will make SJMC different from other institutes of Journalism &Mass Communication training in this state and elsewhere. This will also give a different identity and character to our alumni.</p>
      <p style={{ paddingTop: "20px" , textAlign:"justify" , fontWeight:'bold'}}>
                With this view, the School of Journalism &Mass Communication may come up with courses specifically aimed at teaching and research on Communication & Information system Establishment of this institute was essential because of the current trend of proliferation of media institutions in Bihar without appropriate curricula. Media scholars and professionals have over the years debated the benchmark for journalism curriculum of developing countries since the curricula differ structurally and pedagogically from one another.
                </p> */}
                                    <br></br>
                                    {/* <h5>Department Overview</h5>
                <table className="table table-bordered" style={{border:'2px' , margin:'3px'} }>
                    <tr>
                        <td style={{ backgroundColor: 'maroon', color: 'white', fontWeight:'bold'  }}>Established in</td>
                        <td>2017 (School of Journalism and Mass Communication </td>
                    </tr>
                    <tr>
                        <td style={{ backgroundColor: 'maroon', color: 'white', fontWeight:'bold'  }}>Employee Strength</td>
                        <td>Faculty- 01 Staffs - 04</td>
                    </tr>
                    <tr>
                        <td style={{ backgroundColor: 'maroon', color: 'white', fontWeight:'bold' }}>Student Strength</td>
                        <td>• M.A. in Journalism and Mass communication & Ph.D. in Mass   communication-51 <br></br>• PG-Students - 65 <br></br>• Certificate  Course in Writing for Media -20</td>
                    </tr>
                    <tr>
                        <td style={{ backgroundColor: 'maroon', color: 'white', fontWeight:'bold'  }}>Placement 2021</td>
                        <td>x (tentative)</td>
                    </tr>
                    <tr>
                        <td style={{ backgroundColor: 'maroon', color: 'white' , fontWeight:'bold' }}>Publications, Books & Patent (Last 4-Years)</td>
                        <td>Publications- Books -</td>
                    </tr>
                </table> */}

                                </div>
                            </div>
                            <div className='Box-About-2' style={{ marginTop: "10px", padding: "10px", width: '400px', height: "1333px", textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ width: '100%', height: '550px', marginTop: "10px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)", padding: "10px 10px", backgroundColor: "#F0F0F0", marginBottom: "10px", textAlign: 'center' }}>
                                    <h4 className='heading-news'>News and Announcements</h4>
                                    <br />


                                    <div className="news" style={{ marginBottom: '35px' }}>
                                        <a href="https://adms.akubihar.ac.in/" className='text-decoration-none' style={{ display: 'block', marginTop: '-20px', marginBottom: '20px' }}><img src={Gif} alt="newicon" height="8" width="27" style={{ marginRight: '10px', position: 'relative' }} />Admission 2026</a>
                                    </div>
                                    <div className="news" style={{ marginBottom: '35px' }}>
                                        <a href={Prospectus} className='text-decoration-none' style={{ display: 'block', marginTop: '-20px', marginBottom: '20px' }}><img src={Gif} alt="newicon" height="8" width="27" style={{ marginRight: '10px', position: 'relative' }} />PSE Prospectus 2026</a>
                                    </div>
                                    <div className="news" style={{ marginBottom: '35px' }}>
                                        <a href={Orientation} className='text-decoration-none' style={{ display: 'block', marginTop: '-20px', marginBottom: '20px' }}><img src={Gif} alt="newicon" height="8" width="27" style={{ marginRight: '10px', position: 'relative' }} />PSE Orientation 2026</a>
                                    </div>
                                    {/* <a href="/News4" className='text-decoration-none' style={{ display: 'block', marginBottom: '20px' }}>Open Mic on "Youth Icon of Bihar" </a>
        
        <a href="/News7" className='text-decoration-none' style={{ display: 'block', marginBottom: '20px' }}>Discussion on Journalism at PBF  </a>
        
        <a href="/News3" className='text-decoration-none' style={{ display: 'block', marginBottom: '20px' }}>Training Workshop for Media.</a>
        
        <a href="/News2" className='text-decoration-none' style={{ display: 'block', marginBottom: '20px' }}>Human Rights Awareness</a>
        
        <a href="/News1" className='text-decoration-none' style={{ display: 'block', marginBottom: '20px' }}>Street Play and Script Writing Contest </a>
        
        <a href="/News5" className='text-decoration-none' style={{ display: 'block', marginBottom: '20px' }}>Screening of Seven Films </a>  */}



                                </div>

                                <a href='/Page24' style={{ width: '100%', position: 'relative', right: '8px', textDecoration: 'none' }}>
                                    <div style={{ width: '100%', height: '70px', boxShadow: '0 4px 8px rgb(0,0,0,0.5)', padding: "10px 10px", backgroundColor: "#F0F0F0", margin: '10px', position: 'relative', bottom: '5px', display: 'flex' }}>
                                        <div style={{ backgroundColor: '#780000', borderRadius: '50%', width: '50px', height: '98%' }}>
                                            <img src={MCLogo} style={{ width: '100%', height: 'auto' }}></img>

                                        </div>
                                        <div style={{ marginLeft: '15px', marginTop: '10px' }}>    <h4 >Media Center</h4>
                                        </div>


                                    </div>
                                </a>

                                <div style={{ width: '100%', height: '750px', boxShadow: '0 4px 8px rgb(0,0,0,0.5)', padding: "10px 10px", backgroundColor: "#F0F0F0" }}>
                                    <h4 className='heading-news'>Important Links</h4>

                                    {/* <a href={Announcement1} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px', marginTop:'25px' }}>Notice About Academic Advisory Committee </a> */}
                                    {/*         
        <a href={Announcement2} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px' }}>Board Of Studies  </a>
        
        <a href={Announcement3} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px' }}>Approved Syllabus Of Courses Offered By SJMC  </a>
        
        <a href={Announcement4} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px' }}>MoU between SJMC & BIPARD  </a>

 */}




                                </div>













                            </div>
                        </div>

                    </div>
                    <div className="tab-pane fade tab-border" id="profile" role="tabpanel" aria-labelledby="contact-tab">
                        <br />
                        <h6>VISION:</h6>
                        <p>Department of School Of Journalism and Mass communication is to nurture, produce and create innovative young minds of  global standards for media education, research, extension and training, using state-of-the-art technology for building a knowledge driven information society, contributing to human development, empowerment and participatory democracy, anchored in pluralism, universal values & ethics and to attain and remain a centre of excellence.</p>

                        <h6>Mission:</h6>
                        <p>To create a dynamic learning and working environment which nurtures new ideas, creativity, research and scholarship and develops leaders and innovators in the domain of media and mass communication. anc become a leading national institution by offering the young aspiring media professionals an interdisciplinary and dynamic milieu where they can develop comprehensive and critical awareness of diverse communication, information and media.</p>
                    </div>
                    <div className="tab-pane fade tab-border" id="Program" role="tabpanel" aria-labelledby="contact-tab">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        M.A. in Journalism and Mass Communication
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <h5>a. Objectives of the Program:</h5>
                                        <p>b. The ever converging world of Mass Media has fuelled the need for multi-tasking and multi-talented media professionals. While SJMC always aims at high academic standards, The extra-curricular activities and innovative research, seminars, etc. Department of School of Journalism and Mass Communication enable the students to develop hands-on-pre-requisite skills, interact with industry experts and exchange ideas with students from other institutes and backgrounds. All this all together at SJMC makes an amalgamation of brilliant ideas, top class academic standards and best in class facilities. School of Journalism and Mass Communication is accustomed to experiment with various innovative academic activities to enhance the media understanding among students.</p>

                                        <ul>
                                            <li>Program Outcomes:
                                                <p>Program will develop the understanding of Journalism responsibility and how to report for serve the society. The concept of communication process and theories will provide the vital learning and understanding of the problems for better solution. Media course is also attached with technical knowledge, the essential and professional software, tools, equipment, production and others many skills will help to become a trained students for media industries. Newspaper/Magazine Designing, Film Production, Radio programmes, Photography, Video Editing, Camera Operation, Audio Mixer, Video Switcher, Graphics Designing, Website Designing, Anchoring and more others skill based understanding will be developed for media students.</p>
                                            </li>
                                            <li>Eligibility:</li>
                                            <p>Bachelor’s degree in any discipline with a minimum of 55% marks for General/OBC/SC/ST candidates.
                                            </p>
                                            <li>Intake:
                                            </li>
                                            <p>45</p>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Ph. D. in Mass Communication
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <h5>a. Objectives of the Program:
                                        </h5>
                                        <p>Media Research provides an overview of the concepts, methods, and tools by which communication research is designed, conducted interpreted and critical evaluation. The primary goal of this course are to help you become a knowledgeable consumer and a limited producer of communication research as you develop skill in gathering, organising, interpreting and presenting research information. The major thrust of the curriculum is to impart theoretical and practical knowledge of various aspects of media. The course is designed in such a way that it gives students an overall understanding of Media with specialization in electronic journalism, electronic media production, online journalism and Print media.</p>


                                        <h5>b. Program Outcomes:</h5>
                                        <p>The program will develop understanding among scholars to different research methods and familiar them with various data collection tools. It will enhance the data analysis and preparation of research report and thesis writing ability in researcher. Comprehend the relationship between theory and research methods in study of communication as a social science.</p>

                                        <h5>c. Eligibility:</h5>
                                        <p>M.A.in Media stream with 55% Marks.</p>
                                        <h5>Intake:</h5>
                                        <p>As per vacant seat</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        PG. Dimploma Courses in Development Communication/Online and Digital Journalism/ Photography/Science Communication/Film Making
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <h5>a. Objectives of the Program:
                                        </h5>
                                        <p>To equip students with the essential skills required to excel in various roles within the field of journalism and mass communication, including reporting, writing, editing, interviewing, and media production. The course is designed in such a way that it gives students an overall understanding of Media with specialization in electronic journalism, electronic media production, online journalism and Print media.</p>


                                        <h5>b. Program Outcomes:</h5>
                                        <p>Graduates will demonstrate a comprehensive understanding of key concepts, theories, and principles in journalism, mass communication, and related fields. Professional Skills Development: Graduates will possess the necessary skills for effective.</p>
                                        <h5>c. Eligibility:</h5>
                                        <p>M.A.in Media stream with 55% Marks.</p>
                                        <h5>Intake:</h5>
                                        <p>As per vacant seat</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade tab-border" id="Facilites" role="tabpanel" aria-labelledby="contact-tab">...</div>
                    <div className="tab-pane fade tab-border" id="Student" role="tabpanel" aria-labelledby="contact-tab">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        PG Toppers
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">

                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Post Doc. Fellow Ph D Reserch Scholar & Project Staff
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Post Graducate Students
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Department Alumni
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade tab-border" id="Research" role="tabpanel" aria-labelledby="contact-tab">...</div>
                    <div className="tab-pane fade tab-border" id="eResearch" role="tabpanel" aria-labelledby="contact-tab">...</div>
                    <div className="tab-pane fade tab-border" id="Contact" role="tabpanel" aria-labelledby="contact-tab">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Head
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">

                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Contact
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ width: '100%', margin: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <h2 style={{ width: '100%', textAlign: 'center', borderRadius: '10px', textShadow: '0 3px 10px rgba(0, 0, 0, 0.7)' }}>Our Gallery</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>


                        <div style={{ width: 'calc(33.33% - 20px)', marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <NavLink to={"/page25"}>
                                <img src={Induction_img} alt="Gallery Image 2" style={{ width: '100%', height: '300px', objectFit: 'cover', boxShadow: '0 0 25px 2px rgba(0, 0, 0, 0.4)', borderRadius: '20px' }} />
                            </NavLink>
                            <h4 style={{ textAlign: 'center', fontFamily: 'Times New Roman, serif' }}>PSE Induction Programme 2024</h4>
                        </div>

                        <div style={{ width: 'calc(33.33% - 20px)', marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <NavLink to={"/page20"}>
                                <img src={Agri_banner} alt="Gallery Image 2" style={{ width: '100%', height: '300px', objectFit: 'cover', boxShadow: '0 0 25px 2px rgba(0, 0, 0, 0.4)', borderRadius: '20px' }} />
                            </NavLink>
                            <h4 style={{ textAlign: 'center', fontFamily: 'Times New Roman, serif' }}>National Seminar  Agricultural Productivity  in Bihar</h4>
                        </div>

                        <div style={{ width: 'calc(33.33% - 20px)', marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <NavLink to={"/page21"}>
                                <img src={Data_workshop_banner} alt="Gallery Image 2" style={{ width: '100%', height: '300px', objectFit: 'cover', boxShadow: '0 0 25px 2px rgba(0, 0, 0, 0.4)', borderRadius: '20px' }} />
                            </NavLink>
                            <h4 style={{ textAlign: 'center', fontFamily: 'Times New Roman, serif' }}>Workshop on “Data Analysis Using Software Packages for Social Scientists”</h4>
                        </div>

                        <div style={{ width: 'calc(33.33% - 20px)', marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '-25px' }}>
                            <NavLink to={"/page19"}>
                                <img src={Justice_conference_banner} alt="Gallery Image 2" style={{ width: '100%', height: '300px', objectFit: 'cover', boxShadow: '0 0 25px 2px rgba(0, 0, 0, 0.4)', borderRadius: '20px' }} />
                            </NavLink>
                            <h4 style={{ textAlign: 'center', fontFamily: 'Times New Roman, serif' }}>International Conference on Development with Justice</h4>
                        </div>
                        {/* 
        <div style={{ width: 'calc(33.33% - 20px)', marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',marginTop:'-25px' }}>
            <NavLink to={"/page18"}>
                <img src={ScriptWritingDay} alt="Gallery Image 2" style={{ width: '100%', height: '300px', objectFit: 'cover', boxShadow: '0 0 25px 2px rgba(0, 0, 0, 0.4)', borderRadius: '20px' }} />
            </NavLink>
            <h4 style={{ textAlign: 'center', fontFamily: 'Times New Roman, serif' }}>Script Writing Workshop</h4>
        </div>

        <div style={{ width: 'calc(33.33% - 20px)', marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', top: '1px' }}>
            <NavLink to={"/page17"}>
                <img src={DisasterImage} alt="Gallery Image 2" style={{ width: '100%', height: '300px', objectFit: 'cover', boxShadow: '0 0 25px 2px rgba(0, 0, 0, 0.4)', borderRadius: '20px' }} />
            </NavLink>
            <h4 style={{ textAlign: 'center', fontFamily: 'Times New Roman, serif' }}>Disaster Management Seminar for Media Persons</h4>
        </div>

        <div style={{ width: 'calc(33.33% - 20px)', marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <NavLink to={"/page22"} style={{ width: '100%', height: '100%' }}>
        <img src={Students} alt="Gallery Image 2" style={{ width: '100%', height: '300px', objectFit: 'fill', boxShadow: '0 0 25px 2px rgba(0, 0, 0, 0.4)', borderRadius: '20px' }} />
    </NavLink>
    <h4 style={{ textAlign: 'center', fontFamily: 'Times New Roman, serif',position:'relative',bottom:'25px' }}>Student Activities</h4>
</div> */}



                    </div>
                </div>

            </main>
            <Footer />
        </>
    );
};

export default MainContent;





