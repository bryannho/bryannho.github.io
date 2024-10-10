import {SiGmail, SiGithub, SiLinkedin} from "react-icons/si"


const NavBar = () => {
    return (
        <div className="sm:fixed top-0 right-0 sm:w-screen sm:h-16 mx-4 mt-2 sm:mb-2 
                        flex flex-row justify-end
                        text-slate-800 bg-slate-200">
            <NavBarIcon icon={<SiGmail size="28"/>} link="mailto:bryan.ho16@gmail.com"/>
            <NavBarIcon icon={<SiGithub size="28"/>} link="https://github.com/bryannho"/>
            <NavBarIcon icon={<SiLinkedin size="28"/>} link="https://linkedin.com/in/bryan-ho16"/>
        </div>
    );
};

const NavBarIcon = ({icon, link}) => (
    <div className="navbar-icon">
        <a href={link} target="_blank" rel="noreferrer">{icon}</a>
    </div>
)



export default NavBar;