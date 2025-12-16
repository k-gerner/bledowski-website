import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-12">
            <div className="container mx-auto px-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-2 flex-wrap">
                    <span>Built by</span>
                    <div className="inline-flex items-center gap-1">
                        <span>Konrad Bledowski</span>
                        <a
                            href="https://github.com/kbledows"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center hover:text-blue-400 transition-colors"
                            aria-label="Konrad Bledowski's GitHub Profile"
                        >
                            <FaGithub size={20} />
                        </a>
                    </div>
                    <span>and</span>
                    <div className="inline-flex items-center gap-1">
                        <span>Kyle Gerner</span>
                        <a
                            href="https://github.com/k-gerner"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center hover:text-blue-400 transition-colors"
                            aria-label="Kyle Gerner's GitHub Profile"
                        >
                            <FaGithub size={20} />
                        </a>
                    </div>
                </div>
                <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Chalet la Falaise. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
