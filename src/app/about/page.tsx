'use client'

import React from 'react'
import {
  StyledMailIcon,
  SubHeader,
  IconTextContainer,
  StyledTypography,
  BulletPointTypography,
  StyledPhone,
  Main,
  StyledPlaceIcon,
  BodySection,
  InnerContainer,
  LeftContainer,
  RightContainer,
  ContentSection,
  DescriptionContainer,
  StyledDivBulletPoint,
  DescriptionText,
  RightInnerContainer,
  StyledTypographyLink,
  SkillFlex,
  SkillLevelContainer,
  StyledTypographySkill,
  StyledDescTypography,
  Link,
} from './about.styled'
import SkillContainer from '@/components/skill-container'
import {
  birthDate,
  links,
  skills,
  languages,
  hobbies,
  description,
  history,
} from '../../constants/profile'

const skillLevel = (quantity: number) => {
  const skillLevel = []
  for (let i = 0; i < 5; i++) {
    skillLevel.push(<SkillContainer key={i} isFilled={i < quantity} />)
  }
  return <SkillLevelContainer>{skillLevel}</SkillLevelContainer>
}

const Body = () => {
  return (
    <Main>
      <BodySection>
        <SubHeader>
          <IconTextContainer href='mailto: adex0494@gmail.com'>
            <StyledMailIcon />
            <StyledTypography>adex0494@gmail.com</StyledTypography>
          </IconTextContainer>
          <IconTextContainer
            target='_blank'
            href='https://www.google.com/maps/place/Bella+Vista,+Santiago+De+Los+Caballeros+51000/@19.4430748,-70.7087802,16z/data=!3m1!4b1!4m6!3m5!1s0x8eb1cf4fc363a529:0xbc6a912085e7ddaa!8m2!3d19.4453668!4d-70.7094127!16s%2Fg%2F1td2vz26?entry=ttu'
          >
            <StyledPlaceIcon />
            <StyledTypography>
              Bella Vista, Santiago, 51000, Dominican Republic
            </StyledTypography>
          </IconTextContainer>
          <IconTextContainer href='tel:1-809-910-4977'>
            <StyledPhone />
            <StyledTypography>1-809-910-4977</StyledTypography>
          </IconTextContainer>
        </SubHeader>
        <InnerContainer>
          <LeftContainer>
            <ContentSection>
              <StyledTypography variant='h5'>Profile</StyledTypography>
              <DescriptionContainer>
                <DescriptionText>
                  {description.map((desc) => (
                    <StyledDivBulletPoint key={desc}>
                      <BulletPointTypography variant='h6'>
                        •
                      </BulletPointTypography>
                      <StyledDescTypography>{desc}</StyledDescTypography>
                    </StyledDivBulletPoint>
                  ))}
                </DescriptionText>
              </DescriptionContainer>
            </ContentSection>
            {history.map((hist) => (
              <ContentSection key={hist.name}>
                <StyledTypography
                  variant='h5'
                  style={{ marginBottom: '10px !important' }}
                >
                  {hist.name}
                </StyledTypography>
                {hist.history.map((hist) => (
                  <div
                    key={hist.company + hist.period + hist.role}
                    style={{ marginTop: '24px' }}
                  >
                    <StyledTypography variant='subtitle1'>{`${hist.role}, ${hist.company}`}</StyledTypography>
                    <StyledTypography
                      variant='caption'
                      style={{ marginBottom: '10px !important' }}
                    >
                      {hist.period}
                    </StyledTypography>
                    {hist.description?.map((desc) => (
                      <StyledDivBulletPoint
                        style={{ marginLeft: '16px' }}
                        key={desc}
                      >
                        <BulletPointTypography variant='h6'>
                          •
                        </BulletPointTypography>
                        <StyledDescTypography>{desc}</StyledDescTypography>
                      </StyledDivBulletPoint>
                    ))}
                  </div>
                ))}
              </ContentSection>
            ))}
          </LeftContainer>
          <RightContainer>
            <RightInnerContainer>
              <ContentSection>
                <StyledTypography style={{ marginBottom: '8px' }} variant='h5'>
                  Details
                </StyledTypography>
                <DescriptionContainer style={{ padding: '0' }}>
                  <DescriptionText>
                    <StyledTypography variant='caption'>
                      Date of birth
                    </StyledTypography>
                    <StyledTypography variant='body1'>
                      {birthDate}
                    </StyledTypography>
                  </DescriptionText>
                </DescriptionContainer>
              </ContentSection>
              <ContentSection>
                <StyledTypography variant='h5'>Links</StyledTypography>
                <DescriptionContainer style={{ padding: '0' }}>
                  <DescriptionText>
                    {links.map((link) => (
                      <Link key={link[1]} target='_blank' href={link[1]}>
                        <StyledTypographyLink variant='body1'>
                          {link[0]}
                        </StyledTypographyLink>
                      </Link>
                    ))}
                  </DescriptionText>
                </DescriptionContainer>
              </ContentSection>
              <ContentSection>
                <StyledTypography variant='h5'>Skills</StyledTypography>
                <DescriptionContainer style={{ padding: '0' }}>
                  <DescriptionText>
                    {skills.map((skill) => (
                      <SkillFlex key={skill.skill}>
                        <StyledTypographySkill variant='body1'>
                          {skill.skill}
                        </StyledTypographySkill>
                        {skillLevel(skill.level)}
                      </SkillFlex>
                    ))}
                  </DescriptionText>
                </DescriptionContainer>
              </ContentSection>
              <ContentSection>
                <StyledTypography variant='h5'>Languages</StyledTypography>
                <DescriptionContainer style={{ padding: '0' }}>
                  <DescriptionText>
                    {languages.map((language) => (
                      <SkillFlex key={language.language}>
                        <StyledTypographySkill variant='body1'>
                          {language.language}
                        </StyledTypographySkill>
                        {skillLevel(language.level)}
                      </SkillFlex>
                    ))}
                  </DescriptionText>
                </DescriptionContainer>
              </ContentSection>
              <ContentSection>
                <StyledTypography variant='h5'>Hobbies</StyledTypography>
                <DescriptionContainer style={{ padding: '0' }}>
                  <DescriptionText>
                    <StyledTypography variant='body1'>
                      {hobbies}
                    </StyledTypography>
                  </DescriptionText>
                </DescriptionContainer>
              </ContentSection>
            </RightInnerContainer>
          </RightContainer>
        </InnerContainer>
      </BodySection>
    </Main>
  )
}

export default Body
