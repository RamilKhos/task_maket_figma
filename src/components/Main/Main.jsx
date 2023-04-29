export const Main = () => {
    return (
        <main className="main">

            <div className="main__left-block">
                <h1 className="main__left-block-caption">Зарабатывайте <br/> больше <br/><span>c WELBEX</span> </h1>
                <p>Развиваем и контролируем <br/> продажи за вас</p>
            </div>

            <div className="main__right-block">
                <h3>Вместе с <span>БЕСПЛАТНОЙ <br/></span> <span>КОНСУЛЬТАЦИЕЙ</span> мы дарим:</h3>

                <div className="main__right-block-description">
                    <div>
                        <h3>ВИДЖЕТЫ</h3>
                        <p>30 готовых <br/> решений</p>
                    </div>
                    <div>
                        <h3>DASHBOARD</h3>
                        <p>с показателями <br/> вашего бизнеса</p>
                    </div>
                    <div>
                        <h3>SCYPE АУДИТ</h3>
                        <p>отдела продаж <br/> и CRM системы</p>
                    </div>
                    <div>
                        <h3>35 ДНЕЙ</h3>
                        <p>использования <br/> CRM</p>
                    </div>
                </div>

                <button type="button" className="main__btn">Получить консультацию</button>
            </div>

            <p className="main__first-ball"/>
            <p className="main__second-ball"/>
        </main>
    )
}