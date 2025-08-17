import { useState } from 'react'
import * as S from './styles'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [showX, setShowX] = useState(false)

    const showIcon = () => {
        if(menuOpen) {
            setTimeout(() => setShowX(false), 200)
            setMenuOpen(false)
        } else {
            setMenuOpen(true)
            setTimeout(() => setShowX(true), 200)
        }
    }

    const menu = (e: React.TransitionEvent) => {
        if (
            e.propertyName === 'transform' &&
            e.target instanceof HTMLElement &&
            e.target.tagName === 'HEADER' &&
            menuOpen
            ) {
            setShowX(true)
        }
    }

    const closeMenu = () => {
        setMenuOpen(false)
        setShowX(false)
    }

    return (
        <>
            <S.BotaoHamburguer
                $open={menuOpen}
                onClick={showIcon}
                aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
                <span>
                    {showX ? 'X' : '☰'}
                </span>
            </S.BotaoHamburguer>
            <S.Header $open={menuOpen} onTransitionEnd={menu}>
                <S.Title>GreenCity</S.Title>
                <div>
                    <nav>
                        <S.NavList>
                            <S.ListLinks>
                                <S.Links
                                    to='about'
                                    smooth={true}
                                    duration={500}
                                    onClick={closeMenu}
                                >
                                    Sobre
                                </S.Links>
                            </S.ListLinks>
                            <S.ListLinks>
                                <S.Links
                                    to='cause'
                                    smooth={true}
                                    duration={500}
                                    onClick={closeMenu}
                                >
                                    Causa
                                </S.Links>
                            </S.ListLinks>
                            <S.ListLinks>
                                <S.Links
                                    to='conclusion'
                                    smooth={true}
                                    duration={500}
                                    onClick={closeMenu}
                                >
                                    Conclusão
                                </S.Links>
                            </S.ListLinks>
                            <S.ListLinks>
                                <S.Links
                                    to='phases'
                                    smooth={true}
                                    duration={500}
                                    onClick={closeMenu}
                                >
                                    Fases
                                </S.Links>
                            </S.ListLinks>
                            <S.ListLinks>
                                <S.Links
                                    to='credits'
                                    smooth={true}
                                    duration={500}
                                    onClick={closeMenu}
                                >
                                    Créditos
                                </S.Links>
                            </S.ListLinks>
                        </S.NavList>
                    </nav>
                </div>
            </S.Header>
        </>
    )
}

export default Header