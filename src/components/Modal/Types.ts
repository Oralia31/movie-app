import React from 'react';

export type PropsModal = {
    isOpen: boolean;
    onClose:() => void;
    children?: React.ReactNode;
    movieId: number; 
}

export type InfoDetails = {
    poster_path: string;
    


    
}