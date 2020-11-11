"use strict";

var answers = {
  "ironman": {
    "description": "Вы — Тони Старк, скрывающийся под маской Железного Человека. «Гений, миллиардер, плейбой и филантроп». Ну или хотя бы что-то одно из этого, да? Выдвигаете самые крутые идеи, слегка заносчивый интеллектуал и да, прекрасно выглядите. Противоположный пол от вас без ума, и вы — лидер практически в любой компании. Только нервы берегите — они у вас как раз не железные.",
    "image": "ironman.png"
  },
  "black-window": {
    "description": "Вы — Черная вдова, шпионка Наталья Романова, красотка и перфекционистка. Именно вас просят решать самые хитроумные задачи, потому что если не вы, то кто. У вас превосходные актерские данные, и вы способны быстро приспособиться к любым условиям. А еще выбраться из любой передряги, надрать зад негодяям и при этом отлично выглядеть.",
    "image": "black-window.png"
  },
  "captain-america": {
    "description": "Вы — Капитан Америка. Такой клевый, что аж бесите. Наверняка в детстве вас ставили в пример скрипящим зубами от зависти одноклассникам, вы были любимчиком у преподов в универе и сейчас вприпрыжку поднимаетесь по карьерной лестнице. Вы старомодно порядочны, доводите дела до конца, всегда находите нужные слова в любой ситуации и не бросаете в беде близких людей.",
    "image": "captain-america.png"
  },
  "hulk": {
    "description": "Вы — доктор Брюс Бэннер, а иначе Халк. Нереально умный и столь же раздражительный. Вас можно или обожать, или бояться. Если вас разозлить, превращаетесь натурально в танк, сминающий все на своем пути. Многие восхищаются вашей искренностью, вы не сплетничаете за спиной, а способны сказать все в глаза. У вас нет десятков друзей. Зато есть несколько самых лучших, которые принимают вас таким, какой вы есть, и это круто!",
    "image": "hulk.png"
  },
  "tor": {
    "description": "Вы — Тор, бог грома и доблестный воин. С детства смелый и отважный. Сколько себя помните, вы слышите про то, какой у вас могучий интеллект, но но в 12 вам было интереснее всячески развлекаться, а к 30 годам, в общем, ничего не изменилось. Для вас многое значит семья, вы способны встать горой за любимого человека. Вы честный, открытый и упрямый, а еще способны удивлять в самый неожиданный момент.",
    "image": "tor.png"
  },
  "ronin": {
    "description": "Вы — Соколиный глаз. Вы человек загадочный, как правило, замкнуты и молчаливы. Но при этом вы очень-очень надежный соратник и верный друг. Те, кому удалось войти к вам в доверие, знают, что в действительности за вашей маской тихони скрываются хладнокровие, выдержка и тонкий расчет. Гвозди бы делать из таких людей!",
    "image": "ronin.png"
  },
  "blackpanter": {
    "description": "Вы — Черная пантера. Псевдонимы: Король Мертвых, Человек без страха, Т'Чала, Угольный Тигр. Вы человек необычный, как правило, очень разборчивы в людях. Слушая их вы держите окружение под контролем. И при этом вы очень надежный соратник и верный друг. Вы всегда придете на помощь первым. Те, кому удалось узнать вас знают, что у вас очень хорошая память и восприятия. Люди с вашими качествами хорошо разбираются в електронике.",
    "image": "blackpanter.png"
  },
  "grut": {
    "description": "Вы — лучший друг супергероя. У вас можно поучиться настоящей дружбе. Вы готовы на все ради товарищей, вы добрый и преданный человек. К вам приходят в трудные минуты, с вами разделяют радость, ваши советы слушают и знают, что вы не осудите, но поможете. Именно такие люди, как вы — надежное плечо, пятый элемент и душа всей компании. Почему? Потому что вы есть Грут.",
    "image": "grut.png"
  },
  "wolverine": {
    "description": "Вы — Росомаха. Вы патриот любите свою страну. Вы готовы на все ради нее. Вы не вспыльчивый но лучше вас не доводить. Когда у вас нет настроения лучше не тревожить вас. Из вас выйдит хороший разветчик и агент ЦРУ. Почему? Потому что вы никогда не сдаетесь.",
    "image": "wolverine-2.png , wolverine-1.png"
  },
  "deadpool": {
    "description": "Вы — Дэдпул всегда в центре внимания. Вы любите много говорить и всегда вливаетесь в коллектив. Находясь в кругу друзей вы стараетесь их расмешить, и обычно все перехолит в небольшой стендап. В трудные минуты вы не отчаиваетесь, у вас есть вы и вы справитесь вот ваши слова по жизни. 'Всем наверное интересно, почему я в красном костюме? Это чтобы плохие парни не видели мою кровь. Вон тот парень просек тему. Он надел коричневые штаны'.",
    "image": "deadpool.png"
  }
};