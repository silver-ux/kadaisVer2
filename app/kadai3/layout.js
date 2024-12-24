import './style.css'
import React from 'react'

export const metadata = {
    title: "Recipe",
    description: "コーディング課題を作って、アップロードする場所。",
    icons: {
        icon: {
            url: '/favicons/kadai3.ico',
            href: '/favicons/kadai3.ico'
        }
    },
};

const layout = ({ children }) => {
    return (
        <>{children}</>
    )
}

export default layout;