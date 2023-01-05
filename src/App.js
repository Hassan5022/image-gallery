import "./App.css";
import ImageItem from "./components/ImageItem";
import images from "./data.json";

function App() {
	return (
		<div className="App">
			<h1 className="title">Lazy Loader</h1>
			<ImageItem images={images} />
		</div>
	);
}

export default App;
