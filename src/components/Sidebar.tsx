import { NavLink } from "react-router-dom";
import logo from "/logo.svg";
import dashboard from "../assets/icons/sidebarIcons/dashboard.svg?react";
import projects from "../assets/icons/sidebarIcons/projects.svg?react";
import calendar from "../assets/icons/sidebarIcons/calendar.svg?react";
import vacations from "../assets/icons/sidebarIcons/vacations.svg?react";
import messenger from "../assets/icons/sidebarIcons/messenger.svg?react";
import infoPortal from "../assets/icons/sidebarIcons/infoPortal.svg?react";
import support from "../assets/images/sidebarImages/sidebarImage.svg";
import supportIcon from "../assets/icons/sidebarIcons/support.svg";
import logout from "../assets/icons/outlinedIcons/logout.svg";
import { useState } from "react";

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState("dashboard");

    const navItems = [
        { id: "dashboard", label: "Dashboard", icon: dashboard },
        { id: "projects", label: "Projects", icon: projects },
        { id: "calendar", label: "Calendar", icon: calendar },
        { id: "vacations", label: "Vacations", icon: vacations },
        { id: "messenger", label: "Messenger", icon: messenger },
        { id: "infoPortal", label: "Info Portal", icon: infoPortal },
    ];
    return (
        <aside className="min-w-[200px] h-[calc(100vh-40px)] px-[16px] py-10 bg-white rounded-3xl flex flex-col justify-between">
            <section>
                <NavLink to={"/"}>
                    <img className="mb-5 ml-2" src={logo} alt="logo" />
                </NavLink>
                <div className="w-full min-h-[300px] font-[600] text-[#7D8592] flex flex-col justify-between mb-[50px]">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <NavLink
                                to={"/"}
                                key={item.id}
                                onClick={() => setActiveItem(item.id)}
                                className={`flex gap-4 w-full text-left px-2 py-[10px] items-center rounded-[10px]  ${
                                    activeItem === item.id
                                        ? "bg-[#ebf3ff] text-[#3F8CFF]"
                                        : "hover:bg-[#ebf3ff] text-[#7D8592]"
                                }`}
                            >
                                <Icon
                                    className={`w-5 h-5 ${
                                        activeItem === item.id
                                            ? "text-[#3F8CFF]"
                                            : "text-[#7D8592]"
                                    }`}
                                />
                                <span>{item.label}</span>
                            </NavLink>
                        );
                    })}
                </div>
            </section>
            <section>
                <div className="h-[168px] w-[168px] bg-[#ebf3ff] px-5 py-[26px] rounded-3xl relative flex items-end mb-4">
                    <img
                        className="absolute top-[-48px] left-[50%] transform translate-x-[-50%]"
                        src={support}
                        alt="support"
                    />
                    <button className="w-full px-4 py-3 rounded-[14px] flex gap-2 justify-center text-white font-[500] bg-[#3F8CFF] cursor-pointer">
                        <img
                            className="w-auto"
                            src={supportIcon}
                            alt="support-icon"
                        />
                        <span>Support</span>
                    </button>
                </div>
                <NavLink
                    to={"/"}
                    className="w-full px-2 py-[10px] rounded-[10px] hover:bg-[#ebf3ff] flex gap-2 items-start"
                >
                    <img src={logout} alt="logout" />
                    <span>Logout</span>
                </NavLink>
            </section>
        </aside>
    );
};

export default Sidebar;
