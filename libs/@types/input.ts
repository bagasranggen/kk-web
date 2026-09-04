import React from 'react';
import { Path, UseFormRegister, RegisterOptions } from 'react-hook-form';

export type InputHookValueProps = { [key: string]: string | number };

export type BaseInputHookProps = {
    name: Path<InputHookValueProps>;
    register: UseFormRegister<any>;
};

export type BaseHookOptionProps = RegisterOptions;

export type BaseRegularInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>;

export type InputRegularRef = HTMLInputElement;

export type InputSelectRef = HTMLSelectElement;

export type InputTextareaRef = HTMLTextAreaElement;
