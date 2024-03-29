import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Navigate, Route, Routes } from "react-router-dom";
import { NewNote } from "./components/NewNote";

export type Note = {
    id: string
} & NoteData

export type NoteData = {
    title: string
    markdown: string
    tags: Tag[]
}

export type Tag = {
    id: string
    label: string
}

function App() {
    return (
        <Container className="my-4">
            <Routes>
                <Route path="/" element={<h1>Home</h1>}/>
                <Route path="/new" element={<NewNote />}/>
                <Route path="/:id">
                <Route index element={<h1>Show</h1>}/>
                <Route path="edit" element={<h1>edit</h1>}/>
                </Route>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </Container>
    )
}

export default App
