import { Blurhash } from "react-blurhash";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./ImageItem.css";

export default function ImageItem({ images }) {
	return (
		<div className="image-item">
			{images.map((image) => (
				<div key={Math.random()} className="image">
					<LazyLoadImage
						alt="image"
						height={320}
                        src={image.url}
						width={320}
						placeholder={
							<Blurhash
                                className="blur"
								hash={image.hash}
								width={320}
								height={320}
								resolutionX={32}
								resolutionY={32}
                                punch={1}
							/>
						}
					/>
				</div>
			))}
		</div>
	);
}
