import { useEffect } from "react";
import { useActions } from "../../hooks/use-actions";
import { useTypedSelector } from "../../hooks/use-typed-selector";
import QoD from "../QoD";
import QoDCarousel from "../QoDCarousel";
import QSearch from "../QSearch";

const Home: React.FC<any> = () => {

  const qodList = useTypedSelector((state) => state.qodList);
  const qodListMock = [
		{
			"quote": "From now on we live in a world where man has walked on the Moon. It's not a miracle; we just decided to go.",
			"author": "Tom Hanks",
			"tags": [
					"humor",
					"inspire",
					"man",
					"miracles",
					"moon"
			],
			"category": "inspire",
			"id": "9rDc8ymrY7VZQHCUf6Xf1AeF",
			"background": "https://theysaidso.com/img/qod/qod-inspire.jpg",
			"title": "Inspiring Quote of the day"
		},
    {
			"quote": "Leadership is the capacity to translate vision into reality.",
			"author": "Warren Bennis",
			"tags": [
					"leadership",
					"management"
			],
			"category": "management",
			"id": "f0YeM_C2esuGNpcqffzvPAeF",
			"background": "https://theysaidso.com/img/qod/qod-management.jpg",
			"title": "Management Quote of the day"
    },
    {
			"quote": "But more importantly, you've got to play with your heart, with every fiber of your body. If you're lucky enough to find a guy with a lot of head and a lot of heart, he's never going to come off the field second.",
			"author": "Vince Lombardi",
			"tags": [
					"heart",
					"passion",
					"sports"
			],
			"category": "sports",
			"id": "ZQcM5T_h4p6w49MIgMeMNQeF",
			"background": "https://theysaidso.com/img/qod/qod-sports.jpg",
			"title": "Sports Quote of the day"
    },
    {
			"quote": "In our life there is a single color, as on an artist's palette, which provides the meaning of life and art. It is the color of love.",
			"author": "Marc Chagall",
			"tags": {
					"0": "art",
					"1": "color",
					"2": "life",
					"3": "love",
					"5": "tod",
					"6": "tod"
			},
			"category": "life",
			"id": "l_SE10TB3F45iY1CFeTcrgeF",
			"background": "https://theysaidso.com/img/qod/qod-life.jpg",
			"title": "Quote of the day about life"
    },
    {
			"quote": "Although golf was originally restricted to wealthy, overweight Protestants, today it's open to anybody who owns hideous clothing.",
			"author": "Dave Barry",
			"tags": {
					"0": "clothing",
					"1": "fashion",
					"2": "funny",
					"3": "golf",
					"4": "humor",
					"5": "sports",
					"7": "tod"
			},
			"category": "funny",
			"id": "wpkXjtM5DgxjJIYwJyBNXweF",
			"background": "https://theysaidso.com/img/qod/qod-funny.jpg",
			"title": "Funny Quote of the day"
    },
    {
			"quote": "Love does not dominate; it cultivates.",
			"author": "Johann Wolfgang von Goethe",
			"tags": [
					"love"
			],
			"category": "love",
			"id": "Ovyav_lg5v9UjN1S2FiG4geF",
			"background": "https://theysaidso.com/img/qod/qod-love.jpg",
			"title": "Quote of the day about Love"
    },
    {
			"quote": "In spite of everything I shall rise again: I will take up my pencil, which I have forsaken in my great discouragement, and I will go on with my drawing.",
			"author": "Vincent Van Gogh",
			"tags": [
					"art",
					"discouragement",
					"drawing",
					"inspire"
			],
			"category": "art",
			"id": "G6XL1fDUXhSmxMtpKnZ0lQeF",
			"background": "https://theysaidso.com/img/qod/qod-art.jpg",
			"title": "Art quote of the day "
    },
    {
			"quote": "The best teachers are those who show you where to look, but don't tell you what to see.",
			"author": "Alexandra K.Trenfor",
			"tags": [
					"learn",
					"learning",
					"students",
					"teacher"
			],
			"category": "students",
			"id": "xzQvn5FDuUl36TXiptaEUAeF",
			"background": "https://theysaidso.com/img/qod/qod-students.jpg",
			"title": "Quote of the day for students"
    }
	];

  const { fetchAllQoD } = useActions();

  useEffect(() => {
    fetchAllQoD()
  }, [fetchAllQoD]);

  return (
    <div>
      <QoD />
      <QoDCarousel qodList={qodList}/>
			<QSearch />
    </div>
  )
};

export default Home;