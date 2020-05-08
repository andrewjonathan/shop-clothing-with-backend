import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import {
    CollectionPreviewContainer,
    TitleContainer,
    PreviewContainter
} from './collection-preview.styles';

const CollectionPreview = ({title, items}) => (
    <CollectionPreviewContainer>
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
        <PreviewContainter>
            {items
                .filter((item, idx) => idx < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item} />
            ))}
        </PreviewContainter>
    </CollectionPreviewContainer>
)

export default CollectionPreview;