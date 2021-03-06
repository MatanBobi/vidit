import React, { useState } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled, { css } from 'styled-components'
import styles from './article-preview.module.css'

import OpenInNewIcon from '../icons/open-in-new.svg'

const VideoPreviewWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`

const PreviewTitle = styled.h3`
  font-size: 14px;
  color: rgb(252, 252, 252);
  margin: 20px 0 0;
  text-align: center;
  line-height: 20px;
`

const FlexWrapper = styled.div`
  background: rgb(38, 38, 54);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  min-height: 62px;
  z-index: 2;
`

const Participant = styled.div`
  color: rgb(94, 138, 154);
  font-size: 12px;
  margin: 4px 0 0;
`

const PlayButton = styled.div`
  background: rgb(107, 162, 255);
  position: absolute;
  top: -20px;
  left: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all 200ms ease-in-out;
  svg {
    height: 24px;
    width: 24px;
    fill: #ffffff;
  }

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`

const StyledLink = styled.a`
  height: 100%;
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: #000000;
  height: 100%;
  width: 100%;
  z-index: 1;
  opacity: 0;
  transition: 200ms opacity ease-in-out;
  ${props =>
    props.isOn &&
    css`
      opacity: 0.7;
    `}
`

export default ({ article }) => {
  const [isHovering, setIsHover] = useState(false)
  return (
    <VideoPreviewWrapper className={styles.preview}>
      <Overlay isOn={isHovering} />
      <img alt="" src={article.imageUrl} />
      <FlexWrapper>
        <PlayButton
          onMouseEnter={() => {
            setIsHover(true)
          }}
          onMouseLeave={() => {
            setIsHover(false)
          }}
        >
          {article && article.videoUrl && (
            <StyledLink
              href={article.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <OpenInNewIcon />
            </StyledLink>
          )}
        </PlayButton>
        {article.description && (
          <PreviewTitle data-tip={article.description}>
            {article.title}
          </PreviewTitle>
        )}
        <Participant>{article.participant}</Participant>
        {/* <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    /> */}
        {/* {article.tags &&
      article.tags.map(tag => (
        <p className={styles.tag} key={tag}>
          {tag}
        </p>
      ))} */}
      </FlexWrapper>
    </VideoPreviewWrapper>
  )
}
