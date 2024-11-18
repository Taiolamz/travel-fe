import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className="">
        <img
          src={
            "https://images.pexels.com/photos/27054224/pexels-photo-27054224/free-photo-of-motorbike-parked-on-hill-on-sea-coast.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          }
          alt="hotel"
          className=" w-[232px] object-cover  h-full rounded-[4px]"
        />
      </div>
      <div>
        <img
          src={
            "https://images.pexels.com/photos/27054224/pexels-photo-27054224/free-photo-of-motorbike-parked-on-hill-on-sea-coast.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          }
          alt="hotel"
          className=" w-[232px] object-cover  h-full rounded-[4px]"
        />
      </div>
      <div>
        <img
          src={
            "https://images.pexels.com/photos/27054224/pexels-photo-27054224/free-photo-of-motorbike-parked-on-hill-on-sea-coast.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          }
          alt="hotel"
          className=" w-[232px] object-cover  h-full rounded-[4px]"
        />
      </div>
      <div>
        <img
          src={
            "https://images.pexels.com/photos/27054224/pexels-photo-27054224/free-photo-of-motorbike-parked-on-hill-on-sea-coast.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          }
          alt="hotel"
          className=" w-[232px] object-cover  h-full rounded-[4px]"
        />
      </div>
      <div>
        <img
          src={
            "https://images.pexels.com/photos/27054224/pexels-photo-27054224/free-photo-of-motorbike-parked-on-hill-on-sea-coast.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          }
          alt="hotel"
          className=" w-[232px] object-cover  h-full rounded-[4px]"
        />
      </div>
      <div>
        <img
          src={
            "https://images.pexels.com/photos/27054224/pexels-photo-27054224/free-photo-of-motorbike-parked-on-hill-on-sea-coast.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          }
          alt="hotel"
          className=" w-[232px] object-cover  h-full rounded-[4px]"
        />
      </div>
    </Slider>
  );
}
