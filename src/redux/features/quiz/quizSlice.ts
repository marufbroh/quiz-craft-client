import { createSlice } from "@reduxjs/toolkit";

type TQuiz = {
    module: string;
    question: string;
    description: string;
    options: string[];
    correctOption: string;
};

type TInitialState = {
    question: string;
    description: string;
    options: string[];
    correctOption: string;
    quiz: TQuiz[];
}

type TAction = {
    payload: TQuiz
}

const initialState: TInitialState = {
    question: "",
    description: "",
    options: [],
    correctOption: "",
    quiz: []
};

const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        addQuiz: (state, action: TAction) => {
            state.quiz.push(action.payload)
        },
        setQuestion: (state, action) => {
            state.question = action.payload;
        },
        setDescription: (state, action) => {
            state.description = action.payload;
        },
        setOptions: (state, action) => {
            state.options.push(action.payload);
        },
        setCorrectOption: (state, action) => {
            state.correctOption = action.payload;
        },
    }
});

export const { addQuiz, setQuestion, setDescription, setOptions, setCorrectOption } = quizSlice.actions;

export default quizSlice.reducer;