
import { useState } from "react";
import arrow from "../../assets/arrow.png";     

const DropdownButton = ({ sportName, courts }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [buttonStates, setButtonStates] = useState(courts.map(() => false)); 

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleBoolBtn = (index) => {
        const updatedStates = [...buttonStates];
        updatedStates[index] = !updatedStates[index];
        setButtonStates(updatedStates);

        if (!updatedStates[index]) {
            console.log(`${sportName} Court ${index + 1} ENABLED`);
        } else {
            console.log(`${sportName} Court ${index + 1} DISABLED`);
        }
    };

    return (
        <div className="w-full">
            <button
                onClick={toggleDropdown}
                className="flex items-center text-4xl font-light justify-between uppercase p-4 w-full outline-none cursor-pointer "
                style={{ outlineStyle: "none" }}
            >
                {sportName}
                <img
                    src={arrow}
                    className={`ml-2 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    style={{ height: "50px" }}
                    alt="Arrow Icon"
                />
            </button>

            {isOpen && (
                <div className="pl-6">
                    <ul className="list-none p-2 text-2xl font-normal">
                        {courts.map((court, index) => (
                            <li key={index}>
                                <div className="flex justify-between h-10">
                                    {index+1}. {court.courtName}
                                    <button
                                        onClick={() => handleBoolBtn(index)}
                                        className={`items-center font-medium px-2 m-1 text-xl w-26 tracking-[0.1rem] rounded-md border ${buttonStates[index] ? "bg-black text-blue-200" : "bg-transparent border-black"}`}
                                    >
                                        {buttonStates[index] ? "DISABLE" : "ENABLE"}
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <hr className="border-t border-black" />
        </div>
    );
};

export default DropdownButton;
