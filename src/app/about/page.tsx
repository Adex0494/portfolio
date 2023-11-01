'use client'

import React from 'react'
import {
  StyledMailIcon,
  SubHeader,
  IconTextContainer,
  StyledTypography,
  BulletPointTypography,
  StyledPhoneIcon,
  StyledLinkedInIcon,
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
  StyledCompanyTypography,
} from './about.styled'
import SkillContainer from '@/components/skill-container'
import {
  fullName,
  birthDate,
  links,
  skills,
  languages,
  hobbies,
  description,
  history,
  contacts,
} from '../../constants/about'
import IconText from '@/components/iconText'

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
          <IconText href={contacts.email.href} text={contacts.email.text} Icon={StyledMailIcon}/>
          <IconText href={contacts.linkedIn.href} text={fullName} Icon={StyledLinkedInIcon} blankTarget/>
          <IconText href={contacts.location.href} text={contacts.location.text} Icon={StyledPlaceIcon} blankTarget/>
          <IconText href={contacts.tel.href} text={contacts.tel.text} Icon={StyledPhoneIcon}/>
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
                    <StyledCompanyTypography variant='subtitle1'>{`${hist.role}, ${hist.company}`}</StyledCompanyTypography>
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
