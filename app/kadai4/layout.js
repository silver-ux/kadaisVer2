import './style.css'
import React from 'react'

export const metadata = {
    title: "Recipe2",
    description: "コーディング課題を作って、アップロードする場所。",
    icons: {
        icon: {
            url: '/favicons/kadai4.ico',
            href: '/favicons/kadai4.ico'
        }
    },
};

const layout = ({ children }) => {
    return (
        <>{children}</>
    )
}

export default layout;