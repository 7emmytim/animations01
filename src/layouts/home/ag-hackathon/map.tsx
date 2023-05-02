import { SVGMotionProps, motion } from "framer-motion";
import { ForwardedRef, forwardRef } from "react";

function _Map(
  props: SVGMotionProps<SVGSVGElement>,
  ref: ForwardedRef<SVGSVGElement>
) {
  return (
    <motion.svg
      ref={ref}
      width="84"
      height="84"
      viewBox="0 0 84 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M83.6417 80.5966L68.9932 46.417C68.6086 45.5192 67.7255 44.9375 66.7489 44.9375H17.9208C16.9443 44.9375 16.0618 45.5192 15.6771 46.417L1.0287 80.5966C0.339514 82.2045 1.51953 84 3.27238 84H81.3974C83.1464 84 84.3321 82.2077 83.6417 80.5966Z"
        fill="#E0F4FE"
      />
      <path
        d="M81.3974 84H42.335V44.9375H66.749C67.7256 44.9375 68.608 45.5199 68.9933 46.417L83.6418 80.5966C84.3322 82.2077 83.1471 84 81.3974 84Z"
        fill="#BCDCFE"
      />
      <path
        d="M11.1983 70.0738L9.15613 74.0246C9.15613 74.0246 7.52789 77.8253 6.97412 79.1172H36.4414L39.6019 78.7383L24.2979 63.3574L11.1983 70.0738Z"
        fill="#159BE1"
      />
      <path
        d="M73.1571 69.2689L72.3796 66.7118C72.3796 66.7118 68.952 58.7149 65.1399 49.8203H56.4042L50.4927 49.9271L24.2979 63.3574L39.6018 78.7383L43.3459 79.1172H48.4258L54.2674 78.9538L73.1571 69.2689Z"
        fill="#5DC983"
      />
      <path
        d="M73.1571 69.2683L54.2673 78.9544L48.4258 79.1172H43.3459L42.335 79.0148V54.1106L50.4927 49.9278L54.4415 49.8559L56.4042 49.8203H65.1392C68.9514 58.7149 72.3789 66.7118 72.3789 66.7118L73.1571 69.2683Z"
        fill="#0EAB61"
      />
      <path
        d="M19.5308 49.8203C18.0342 53.3127 12.1805 66.9686 12.1805 66.9686L11.1982 70.0738L50.4922 49.9271L45.6882 49.8203H19.5308Z"
        fill="#0EAB61"
      />
      <path
        d="M50.4927 49.9278L42.335 54.1106V49.8203H45.6881L50.4927 49.9278Z"
        fill="#0EAB61"
      />
      <path
        d="M73.1573 69.269L54.2676 78.9539L59.0429 79.1173H77.6949C75.9681 75.0858 74.3081 71.2126 74.3081 71.2126L73.1573 69.269Z"
        fill="#159BE1"
      />
      <path
        d="M28.3885 64.1598L43.3459 79.1172H36.4413L23.821 66.4969L9.16943 73.9934L12.1805 66.9686C12.581 66.7639 45.2876 50.025 45.6882 49.8203H56.4043L28.3885 64.1598Z"
        fill="#FED941"
      />
      <path
        d="M42.335 78.1064L43.3459 79.1173H42.335V78.1064Z"
        fill="#FEB99E"
      />
      <path
        d="M56.4042 49.8203L53.4796 51.3176L42.335 57.0206V51.5357C44.3402 50.5101 45.6118 49.8591 45.6881 49.8203H56.4042Z"
        fill="#FCBE29"
      />
      <path
        d="M74.3079 71.212L59.0427 79.1173H48.4258L72.3789 66.7119L74.3079 71.212Z"
        fill="#FCBE29"
      />
      <path
        d="M42.335 0.666748C30.4007 0.666748 20.3623 9.41512 20.3623 24.5925C20.3623 39.9772 39.671 62.3587 40.4931 63.3041C41.4646 64.4218 43.2041 64.4237 44.1775 63.3041C44.9995 62.3587 64.3076 39.9772 64.3076 24.5925C64.3076 9.55499 54.0855 0.666748 42.335 0.666748ZM42.335 29.9636C38.2965 29.9636 35.0107 26.6779 35.0107 22.6394C35.0107 18.6009 38.2965 15.3152 42.335 15.3152C46.3734 15.3152 49.6592 18.6009 49.6592 22.6394C49.6592 26.6779 46.3734 29.9636 42.335 29.9636Z"
        fill="#EE3616"
      />
      <path
        d="M42.335 0.666748V15.3152C46.3735 15.3152 49.6592 18.6015 49.6592 22.6394C49.6592 26.6773 46.3735 29.9636 42.335 29.9636V64.1433C43.014 64.1433 43.6911 63.8636 44.1775 63.3034C51.3783 55.0255 64.3076 36.9954 64.3076 24.5925C64.3076 9.55499 54.0849 0.666748 42.335 0.666748Z"
        fill="#CB0010"
      />
    </motion.svg>
  );
}

export const Map = forwardRef<SVGSVGElement, SVGMotionProps<SVGSVGElement>>(
  _Map
);

Map.displayName = "Map";
