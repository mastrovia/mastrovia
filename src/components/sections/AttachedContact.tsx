import { ContactPopup } from "../common/ContactPopup";

export default function AttachedContact() {
    return <ContactPopup>
        <div className="fixed right-0 top-[50%] bg-primary text-background p-5 w-12 h-40 translate-y-[-50%] z-50 hidden md:flex items-center justify-center transition-all duration-300 cursor-pointer ">
            <div className="rotate-90 whitespace-nowrap">
                Get in touch
            </div>
        </div>
    </ContactPopup>
}