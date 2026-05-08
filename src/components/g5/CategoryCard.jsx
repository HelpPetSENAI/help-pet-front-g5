import {CategoryCardContainer, CategoryCardEmoji, CategoryCardSpan, CategoryCardWrapper} from "./styles.js";

export default function CategoryCard({key, onClick, href, emoji, label}) {
    return (
        <CategoryCardWrapper>
            <CategoryCardContainer
                key={key}
                href={href}
                onClick={onClick}
            >
                <CategoryCardSpan>
                    <CategoryCardEmoji>
                        {emoji}
                    </CategoryCardEmoji>
                </CategoryCardSpan>
                {label}
            </CategoryCardContainer>


        </CategoryCardWrapper>
    )
}