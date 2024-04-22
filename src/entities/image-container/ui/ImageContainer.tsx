import styles from './styles.module.scss';

// type TImageContainerProps = {
//     imgSrc: string;
//     imgAlt: string;
//     imgDescription: string;
//   } & (
//     | { isBlank?: false }
//     | { isBlank: true } & Partial<Omit<ImageData, 'isBlank'>>
//   );

export function ImageContainer({
    imgSrc,
    imgAlt,
    imgDescription,
    onClick,
    isBlank = false,
}: {
    imgSrc: string;
    imgAlt: string;
    imgDescription: string;
    onClick: React.MouseEventHandler<HTMLImageElement>;
    isBlank?: boolean;
}) {
    return (
        <div className={styles.imageContainer}>
            {isBlank ? null : (
                <img
                    src={imgSrc}
                    alt={imgAlt}
                    aria-description={imgDescription}
                    onClick={onClick}
                />
            )}
        </div>
    );
}
