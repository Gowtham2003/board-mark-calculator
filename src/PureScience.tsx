import React, { useState } from 'react';
import useForm from './useForm';
interface InputTypes {
    top_one: number;
    top_two: number;
    top_three: number;
    tamil: number;
    english: number;
    botany: number;
    zoology: number;
    physics: number;
    chemistry: number;
}
const getMarks = ({
    top_one,
    top_two,
    top_three,
    tamil,
    english,
    botany,
    zoology,
    physics,
    chemistry,
}: InputTypes) => {
    const tenth_avg: number = (top_one + top_two + top_three) / 3 / 2;
    const tam = ((tamil - 10) * 20) / 90;

    const eng = ((english - 10) * 20) / 90;

    const mat = ((botany - 10) * 20) / 90;

    const phy = ((physics - 30) * 20) / 70;

    const che = ((chemistry - 30) * 20) / 70;

    const zoo = ((zoology - 30) * 20) / 70;
    const eleventh_total = tam + eng + mat + phy + che + zoo;

    const total = tenth_avg * 6 + eleventh_total + 6 * 30;
    return Number(total.toFixed(2));
};
const getSubMarks = ({
    top_one,
    top_two,
    top_three,
    tamil,
    english,
    botany,
    zoology,
    physics,
    chemistry,
}: InputTypes) => {
    const tenth_avg: number = (top_one + top_two + top_three) / 3 / 2;
    const tam = ((tamil - 10) * 20) / 90;

    const eng = ((english - 10) * 20) / 90;

    const mat = ((botany - 10) * 20) / 90;

    const phy = ((physics - 30) * 20) / 70;

    const che = ((chemistry - 30) * 20) / 70;

    const zoo = ((zoology - 30) * 20) / 70;

    const Tamil = tenth_avg + tam + 30;

    const English = tenth_avg + eng + 30;

    const Maths = tenth_avg + mat + 30;

    const Physics = tenth_avg + phy + 30;

    const Chemistry = tenth_avg + che + 30;

    const Biology = tenth_avg + zoo + 30;

    return {
        tamil: Number(Tamil.toFixed(2)),
        english: Number(English.toFixed(2)),
        botany: Number(Maths.toFixed(2)),
        physics: Number(Physics.toFixed(2)),
        chemistry: Number(Chemistry.toFixed(2)),
        zoology: Number(Biology.toFixed(2)),
    };
};
const Input = ({
    value,
    placeholder,
    onChange,
    name,
}: {
    value: number;
    placeholder: string;
    name: string;
    onChange: (e: any) => void;
}) => {
    return (
        <div className=" relative mt-10">
            <label className="text-gray-700">{placeholder}</label>
            <input
                type="number"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
};
const App = () => {
    const { inputs, handleChange, clearForm, resetForm } = useForm({
        top_one: 0,
        top_two: 0,
        top_three: 0,
        tamil: 0,
        english: 0,
        botany: 0,
        zoology: 0,
        physics: 0,
        chemistry: 0,
    });

    const [totalMark, setTotalMark] = useState(0);
    const [marks, setMarks] = useState({
        tamil: 0,
        english: 0,
        botany: 0,
        physics: 0,
        chemistry: 0,
        zoology: 0,
    });
    return (
        <main className="container p-6">
            <span className=" text-lg font-black uppercase text-indigo-600">
                Class 10 Top Three Marks
            </span>

            <div className="p-4">
                <Input
                    value={(inputs as InputTypes).top_one}
                    name="top_one"
                    placeholder="Top Mark One"
                    onChange={handleChange}
                />
                <Input
                    value={(inputs as InputTypes).top_two}
                    name="top_two"
                    placeholder="Top Mark Two"
                    onChange={handleChange}
                />
                <Input
                    value={(inputs as InputTypes).top_three}
                    name="top_three"
                    placeholder="Top Mark Three"
                    onChange={handleChange}
                />
            </div>
            <span className=" text-lg font-black uppercase text-indigo-600">
                Class 11 Subject Marks
            </span>
            <div className="p-4">
                <Input
                    value={(inputs as InputTypes).tamil}
                    name="tamil"
                    placeholder="Class 11 Tamil Mark"
                    onChange={handleChange}
                />
                <Input
                    value={(inputs as InputTypes).english}
                    name="english"
                    placeholder="Class 11 English Mark"
                    onChange={handleChange}
                />
                <Input
                    value={(inputs as InputTypes).physics}
                    name="physics"
                    placeholder="Class 11 Physics Mark"
                    onChange={handleChange}
                />
                <Input
                    value={(inputs as InputTypes).chemistry}
                    name="chemistry"
                    placeholder="Class 11 Chemistry Mark"
                    onChange={handleChange}
                />
                <Input
                    value={(inputs as InputTypes).botany}
                    name="botany"
                    placeholder="Class 11 Maths Mark"
                    onChange={handleChange}
                />
                <Input
                    value={(inputs as InputTypes).zoology}
                    name="zoology"
                    placeholder="Class 11 Zoology"
                    onChange={handleChange}
                />
            </div>

            <button
                type="button"
                className="py-4 mb-5 px-6  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
                onClick={(e) => {
                    e.preventDefault();
                    setTotalMark(getMarks(inputs as InputTypes));
                    setMarks(getSubMarks(inputs as InputTypes));
                }}
            >
                Calculate
            </button>
            <span className=" text-md font-black uppercase text-indigo-600">
                Result:
            </span>
            <div className="mt-5 mb-3 bg-gray-500 p-3 rounded-lg text-white">
                {totalMark}
            </div>
            <span className=" text-md font-black uppercase text-indigo-600">
                Individual Marks:
            </span>
            <div className="mt-5 bg-gray-500 p-3 rounded-lg text-white">
                Tamil: {marks.tamil}
                <br />
                English: {marks.english}
                <br />
                Physics: {marks.physics}
                <br />
                Chemistry: {marks.chemistry}
                <br />
                Botany: {marks.botany}
                <br />
                Zoology: {marks.zoology}
            </div>
        </main>
    );
};

export default App;
