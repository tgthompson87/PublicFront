import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

//animation variants
const vectorPathVariant = {
  initial: {
    pathLength: 0,
    opacity: 0,
  },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const logoFillVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 2.1,
      duration: 1,
    },
  },
};

const textComponentsVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 3,
    },
  },
};

const LandingScreen = ({
  screenHeight,
  screenWidth,
  aboutRefHandler,
  projectRefHandler,
  contactRefHandler,
}) => {
  //show vector animation
  const [loaded, setLoaded] = useState(false);

  //responsiveWidth
  const [width, setWidth] = useState();

  //hide vector animation
  useEffect(() => {
    setTimeout(() => setLoaded(true), 2500);
  }, []);

  useEffect(() => {
    if (screenWidth > 1024) {
      //pc
      setWidth("70vw");
    } else if (screenWidth < 1023 && screenWidth > 768) {
      //tablet
      setWidth("110vw");
    } else {
      //mobile
      setWidth("160vw");
    }
  });

  //responsive breakpoints: pc: min 1024px, tablet: max 1023px, min 768px, phone: max 767px
  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <svg
          style={{ width: width }}
          width="100%"
          height="100%"
          viewBox="0 0 1346 817"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            id="radial gradient"
            width="1346"
            height="817"
            fill="url(#paint0_radial)"
            fillOpacity="0.48"
          />
          <motion.g
            variants={logoFillVariant}
            initial="initial"
            animate="animate"
            id="Logo [Pink variant - opacity shadow]"
          >
            <path
              id="Vector 8"
              d="M758.5 232H509L572.5 294.5H822L758.5 232Z"
              fill="#FF6CA5"
            />
            <path
              id="Vector 3"
              d="M822 421V294.5H760.5V357.5L822 421Z"
              fill="url(#paint1_linear)"
            />
            <path
              id="Vector 4"
              d="M760.5 357.5H697.5L760 421H822L760.5 357.5Z"
              fill="url(#paint2_linear)"
            />
            <g id="Vector 5">
              <path
                d="M698 483.5L697.5 357.5L760 421V545.5L698 483.5Z"
                fill="#FA3663"
              />
              <path
                d="M698 483.5L697.5 357.5L760 421V545.5L698 483.5Z"
                fill="url(#paint3_linear)"
              />
            </g>
            <path
              id="Vector 6"
              d="M635 546L760 545.5L698 483.5H572L635 546Z"
              fill="url(#paint4_linear)"
            />
            <path
              id="Vector 7"
              d="M572 358.5V483.5H633V358.5H572Z"
              fill="url(#paint5_linear)"
            />
          </motion.g>
          {!loaded && (
            <g id="Logo Vector Outline">
              <motion.path
                variants={vectorPathVariant}
                initial="initial"
                animate="animate"
                id="Vector 8_2"
                d="M758.5 232H509L572.5 294.5H822L758.5 232Z"
                stroke="#AD0A75"
              />
              <motion.path
                variants={vectorPathVariant}
                initial="initial"
                animate="animate"
                id="Vector 3_2"
                d="M822 421V294.5H760.5V357.5L822 421Z"
                stroke="#AD0A75"
              />
              <motion.path
                variants={vectorPathVariant}
                initial="initial"
                animate="animate"
                id="Vector 4_2"
                d="M760.5 357.5H697.5L760 421H822L760.5 357.5Z"
                stroke="#AD0A75"
              />
              <motion.path
                variants={vectorPathVariant}
                initial="initial"
                animate="animate"
                id="Vector 5_2"
                d="M698 483.5L697.5 357.5L760 421V545.5L698 483.5Z"
                stroke="#AD0A75"
              />
              <motion.path
                variants={vectorPathVariant}
                initial="initial"
                animate="animate"
                id="Vector 6_2"
                d="M635 546L760 545.5L698 483.5H572L635 546Z"
                stroke="#AD0A75"
              />
              <motion.path
                variants={vectorPathVariant}
                initial="initial"
                animate="animate"
                id="Vector 7_2"
                d="M572 358.5V483.5H633V358.5H572Z"
                stroke="#AD0A75"
              />
            </g>
          )}
          <motion.g
            variants={textComponentsVariant}
            initial="initial"
            animate="animate"
            id="Text Components"
          >
            <g id="Text [name/title]">
              <path
                id="Terry Thompson"
                d="M363.124 421V372.417H343.505V361.639H395.793V372.417H376.175V421H363.124ZM415.895 421.926C411.011 421.926 406.801 421.056 403.265 419.316C399.785 417.52 397.09 415.022 395.182 411.822C393.329 408.566 392.403 404.749 392.403 400.371C392.403 396.105 393.301 392.372 395.097 389.172C396.95 385.917 399.448 383.391 402.591 381.594C405.791 379.742 409.468 378.816 413.621 378.816C419.628 378.816 424.399 380.724 427.935 384.541C431.472 388.302 433.24 393.41 433.24 399.866V403.065H404.528C404.977 406.321 406.156 408.707 408.064 410.222C410.029 411.682 412.723 412.412 416.147 412.412C418.393 412.412 420.666 412.075 422.968 411.401C425.269 410.728 427.346 409.689 429.198 408.286L432.566 416.79C430.49 418.362 427.935 419.625 424.904 420.579C421.929 421.477 418.926 421.926 415.895 421.926ZM414.127 387.236C411.432 387.236 409.243 388.05 407.559 389.678C405.931 391.305 404.921 393.579 404.528 396.498H422.715C422.378 390.323 419.515 387.236 414.127 387.236ZM440.635 421V379.658H453.097V386.815C455.061 381.987 459.271 379.321 465.727 378.816L469.432 378.563L470.189 389.257L463.032 390.014C456.745 390.632 453.602 393.831 453.602 399.613V421H440.635ZM475.335 421V379.658H487.796V386.815C489.761 381.987 493.971 379.321 500.426 378.816L504.131 378.563L504.889 389.257L497.732 390.014C491.445 390.632 488.302 393.831 488.302 399.613V421H475.335ZM515.783 436.156L523.698 418.727L506.689 379.658H520.077L530.434 405.928L541.127 379.658H553.757L528.75 436.156H515.783ZM596.154 421V372.417H576.535V361.639H628.823V372.417H609.205V421H596.154ZM634.114 421V361.639H646.828V385.299C648.288 383.166 650.168 381.566 652.47 380.5C654.771 379.377 657.325 378.816 660.132 378.816C669.843 378.816 674.699 384.598 674.699 396.161V421H661.984V396.75C661.984 393.888 661.451 391.839 660.385 390.604C659.318 389.313 657.746 388.667 655.669 388.667C652.975 388.667 650.814 389.509 649.186 391.193C647.614 392.877 646.828 395.123 646.828 397.929V421H634.114ZM704.061 421.926C699.627 421.926 695.754 421.056 692.442 419.316C689.186 417.52 686.66 415.022 684.864 411.822C683.068 408.566 682.169 404.721 682.169 400.287C682.169 395.908 683.068 392.119 684.864 388.92C686.66 385.664 689.186 383.166 692.442 381.426C695.754 379.686 699.627 378.816 704.061 378.816C708.496 378.816 712.341 379.686 715.597 381.426C718.909 383.166 721.463 385.664 723.259 388.92C725.111 392.119 726.038 395.908 726.038 400.287C726.038 404.721 725.111 408.566 723.259 411.822C721.463 415.022 718.909 417.52 715.597 419.316C712.341 421.056 708.496 421.926 704.061 421.926ZM704.061 412.412C706.756 412.412 708.945 411.429 710.629 409.465C712.369 407.5 713.239 404.441 713.239 400.287C713.239 396.189 712.369 393.186 710.629 391.277C708.945 389.313 706.756 388.33 704.061 388.33C701.367 388.33 699.178 389.313 697.494 391.277C695.81 393.186 694.968 396.189 694.968 400.287C694.968 404.441 695.81 407.5 697.494 409.465C699.178 411.429 701.367 412.412 704.061 412.412ZM733.941 421V379.658H746.403V385.636C747.638 383.503 749.322 381.847 751.455 380.668C753.644 379.433 756.17 378.816 759.033 378.816C761.952 378.816 764.422 379.461 766.442 380.752C768.519 382.043 770.091 384.008 771.158 386.646C772.449 384.177 774.301 382.268 776.715 380.921C779.185 379.517 781.907 378.816 784.882 378.816C789.597 378.816 793.106 380.247 795.407 383.11C797.709 385.917 798.859 390.267 798.859 396.161V421H786.145V396.582C786.145 393.831 785.696 391.839 784.798 390.604C783.956 389.313 782.497 388.667 780.42 388.667C778.006 388.667 776.125 389.509 774.778 391.193C773.431 392.877 772.757 395.263 772.757 398.35V421H760.043V396.582C760.043 393.831 759.594 391.839 758.696 390.604C757.798 389.313 756.338 388.667 754.318 388.667C751.904 388.667 750.023 389.509 748.676 391.193C747.329 392.877 746.655 395.263 746.655 398.35V421H733.941ZM808.599 436.156V379.658H821.061V385.804C822.183 383.671 823.895 381.987 826.197 380.752C828.554 379.461 831.193 378.816 834.112 378.816C837.704 378.816 840.848 379.686 843.542 381.426C846.293 383.166 848.426 385.636 849.941 388.836C851.457 392.035 852.215 395.852 852.215 400.287C852.215 404.721 851.457 408.566 849.941 411.822C848.426 415.022 846.293 417.52 843.542 419.316C840.848 421.056 837.704 421.926 834.112 421.926C831.361 421.926 828.835 421.337 826.534 420.158C824.288 418.979 822.548 417.407 821.313 415.443V436.156H808.599ZM830.323 412.412C833.017 412.412 835.206 411.429 836.89 409.465C838.574 407.5 839.416 404.441 839.416 400.287C839.416 396.189 838.574 393.186 836.89 391.277C835.206 389.313 833.017 388.33 830.323 388.33C827.572 388.33 825.355 389.313 823.671 391.277C821.987 393.186 821.145 396.189 821.145 400.287C821.145 404.441 821.987 407.5 823.671 409.465C825.355 411.429 827.572 412.412 830.323 412.412ZM875.82 421.926C872.172 421.926 868.775 421.505 865.632 420.663C862.489 419.821 859.878 418.67 857.801 417.211L860.833 408.959C862.91 410.25 865.267 411.289 867.905 412.075C870.6 412.805 873.266 413.169 875.904 413.169C878.262 413.169 880.002 412.805 881.125 412.075C882.247 411.289 882.809 410.279 882.809 409.044C882.809 407.079 881.377 405.844 878.515 405.339L869.674 403.739C866.137 403.122 863.443 401.859 861.59 399.95C859.738 398.041 858.812 395.544 858.812 392.456C858.812 389.65 859.598 387.236 861.169 385.215C862.741 383.194 864.902 381.622 867.653 380.5C870.403 379.377 873.575 378.816 877.167 378.816C880.142 378.816 883.033 379.209 885.84 379.995C888.647 380.724 891.06 381.903 893.081 383.531L889.882 391.698C888.198 390.463 886.177 389.453 883.819 388.667C881.518 387.881 879.357 387.488 877.336 387.488C874.81 387.488 872.985 387.909 871.863 388.751C870.74 389.537 870.179 390.548 870.179 391.783C870.179 393.747 871.498 394.982 874.136 395.487L882.977 397.087C886.626 397.705 889.404 398.94 891.313 400.792C893.222 402.588 894.176 405.058 894.176 408.202C894.176 412.524 892.492 415.892 889.124 418.306C885.756 420.719 881.321 421.926 875.82 421.926ZM921.304 421.926C916.869 421.926 912.996 421.056 909.684 419.316C906.429 417.52 903.903 415.022 902.106 411.822C900.31 408.566 899.412 404.721 899.412 400.287C899.412 395.908 900.31 392.119 902.106 388.92C903.903 385.664 906.429 383.166 909.684 381.426C912.996 379.686 916.869 378.816 921.304 378.816C925.739 378.816 929.584 379.686 932.839 381.426C936.151 383.166 938.705 385.664 940.502 388.92C942.354 392.119 943.28 395.908 943.28 400.287C943.28 404.721 942.354 408.566 940.502 411.822C938.705 415.022 936.151 417.52 932.839 419.316C929.584 421.056 925.739 421.926 921.304 421.926ZM921.304 412.412C923.998 412.412 926.188 411.429 927.872 409.465C929.612 407.5 930.482 404.441 930.482 400.287C930.482 396.189 929.612 393.186 927.872 391.277C926.188 389.313 923.998 388.33 921.304 388.33C918.61 388.33 916.42 389.313 914.736 391.277C913.052 393.186 912.21 396.189 912.21 400.287C912.21 404.441 913.052 407.5 914.736 409.465C916.42 411.429 918.61 412.412 921.304 412.412ZM951.015 421V379.658H963.477V385.72C964.88 383.475 966.761 381.763 969.118 380.584C971.476 379.405 974.114 378.816 977.033 378.816C981.917 378.816 985.566 380.247 987.979 383.11C990.393 385.917 991.6 390.267 991.6 396.161V421H978.886V396.75C978.886 393.888 978.352 391.839 977.286 390.604C976.219 389.313 974.648 388.667 972.571 388.667C969.876 388.667 967.715 389.509 966.087 391.193C964.516 392.877 963.73 395.123 963.73 397.929V421H951.015Z"
                fill="#F1EDF4"
              />
              <path
                id="Full Stack Developer"
                d="M536.296 470V450.26H548.84V452.612H539.208V458.912H548.252V461.264H539.208V470H536.296ZM556.036 470.252C552.732 470.252 551.08 468.413 551.08 464.736V456.336H553.908V464.764C553.908 465.865 554.132 466.677 554.58 467.2C555.028 467.723 555.737 467.984 556.708 467.984C557.772 467.984 558.63 467.629 559.284 466.92C559.956 466.211 560.292 465.259 560.292 464.064V456.336H563.12V470H560.376V467.816C559.928 468.619 559.33 469.225 558.584 469.636C557.837 470.047 556.988 470.252 556.036 470.252ZM571.557 470.252C570.064 470.252 568.944 469.832 568.197 468.992C567.469 468.152 567.105 466.92 567.105 465.296V450.26H569.933V465.128C569.933 466.976 570.689 467.9 572.201 467.9C572.425 467.9 572.631 467.891 572.817 467.872C573.023 467.853 573.228 467.816 573.433 467.76L573.377 470.028C572.743 470.177 572.136 470.252 571.557 470.252ZM580.116 470.252C578.622 470.252 577.502 469.832 576.756 468.992C576.028 468.152 575.664 466.92 575.664 465.296V450.26H578.492V465.128C578.492 466.976 579.248 467.9 580.76 467.9C580.984 467.9 581.189 467.891 581.376 467.872C581.581 467.853 581.786 467.816 581.992 467.76L581.936 470.028C581.301 470.177 580.694 470.252 580.116 470.252ZM598.466 470.252C596.917 470.252 595.498 470.056 594.21 469.664C592.922 469.253 591.83 468.684 590.934 467.956L591.858 465.66C592.791 466.369 593.79 466.901 594.854 467.256C595.918 467.611 597.122 467.788 598.466 467.788C600.053 467.788 601.219 467.508 601.966 466.948C602.731 466.369 603.114 465.623 603.114 464.708C603.114 463.961 602.843 463.373 602.302 462.944C601.761 462.496 600.855 462.141 599.586 461.88L596.59 461.264C594.817 460.891 593.491 460.275 592.614 459.416C591.755 458.557 591.326 457.4 591.326 455.944C591.326 454.768 591.634 453.732 592.25 452.836C592.885 451.94 593.762 451.249 594.882 450.764C596.002 450.26 597.29 450.008 598.746 450.008C600.09 450.008 601.331 450.213 602.47 450.624C603.627 451.016 604.607 451.595 605.41 452.36L604.458 454.572C602.871 453.172 600.958 452.472 598.718 452.472C597.337 452.472 596.235 452.78 595.414 453.396C594.611 454.012 594.21 454.833 594.21 455.86C594.21 456.644 594.462 457.269 594.966 457.736C595.47 458.203 596.31 458.557 597.486 458.8L600.454 459.416C602.321 459.808 603.711 460.415 604.626 461.236C605.541 462.039 605.998 463.131 605.998 464.512C605.998 465.669 605.69 466.677 605.074 467.536C604.458 468.395 603.59 469.067 602.47 469.552C601.35 470.019 600.015 470.252 598.466 470.252ZM614.738 470.252C613.02 470.252 611.742 469.813 610.902 468.936C610.062 468.059 609.642 466.789 609.642 465.128V458.52H606.982V456.336H609.642V452.22H612.47V456.336H616.698V458.52H612.47V464.904C612.47 465.893 612.675 466.64 613.086 467.144C613.515 467.648 614.206 467.9 615.158 467.9C615.456 467.9 615.746 467.872 616.026 467.816C616.306 467.741 616.586 467.657 616.866 467.564L617.314 469.692C617.034 469.86 616.642 469.991 616.138 470.084C615.652 470.196 615.186 470.252 614.738 470.252ZM623.508 470.252C622.556 470.252 621.707 470.065 620.96 469.692C620.214 469.319 619.616 468.815 619.168 468.18C618.739 467.545 618.524 466.827 618.524 466.024C618.524 465.016 618.776 464.223 619.28 463.644C619.803 463.065 620.652 462.645 621.828 462.384C623.023 462.123 624.628 461.992 626.644 461.992H627.596V461.264C627.596 460.2 627.372 459.435 626.924 458.968C626.476 458.501 625.739 458.268 624.712 458.268C623.928 458.268 623.144 458.389 622.36 458.632C621.576 458.856 620.774 459.22 619.952 459.724L619.084 457.736C619.794 457.232 620.68 456.831 621.744 456.532C622.808 456.233 623.826 456.084 624.796 456.084C626.663 456.084 628.044 456.532 628.94 457.428C629.836 458.305 630.284 459.687 630.284 461.572V470H627.624V467.732C627.288 468.516 626.766 469.132 626.056 469.58C625.347 470.028 624.498 470.252 623.508 470.252ZM624.068 468.236C625.076 468.236 625.916 467.881 626.588 467.172C627.26 466.463 627.596 465.567 627.596 464.484V463.728H626.672C625.31 463.728 624.236 463.793 623.452 463.924C622.687 464.055 622.136 464.279 621.8 464.596C621.483 464.895 621.324 465.315 621.324 465.856C621.324 466.565 621.567 467.144 622.052 467.592C622.538 468.021 623.21 468.236 624.068 468.236ZM640.199 470.252C638.799 470.252 637.586 469.963 636.559 469.384C635.551 468.787 634.767 467.956 634.207 466.892C633.647 465.809 633.367 464.54 633.367 463.084C633.367 460.919 633.983 459.211 635.215 457.96C636.447 456.709 638.109 456.084 640.199 456.084C641.058 456.084 641.907 456.233 642.747 456.532C643.587 456.831 644.278 457.241 644.819 457.764L643.923 459.752C643.401 459.267 642.822 458.912 642.187 458.688C641.571 458.445 640.983 458.324 640.423 458.324C639.098 458.324 638.071 458.744 637.343 459.584C636.634 460.405 636.279 461.581 636.279 463.112C636.279 464.643 636.634 465.847 637.343 466.724C638.071 467.583 639.098 468.012 640.423 468.012C640.983 468.012 641.571 467.9 642.187 467.676C642.822 467.433 643.401 467.069 643.923 466.584L644.819 468.6C644.278 469.104 643.578 469.505 642.719 469.804C641.879 470.103 641.039 470.252 640.199 470.252ZM647.25 470V450.26H650.078V462.3H650.134L656.07 456.336H659.57L653.018 462.916L660.074 470H656.546L650.134 463.756H650.078V470H647.25ZM669.351 470V450.26H676.323C679.571 450.26 682.072 451.109 683.827 452.808C685.6 454.507 686.487 456.943 686.487 460.116C686.487 463.289 685.6 465.735 683.827 467.452C682.072 469.151 679.571 470 676.323 470H669.351ZM672.263 467.564H676.155C681.027 467.564 683.463 465.081 683.463 460.116C683.463 455.169 681.027 452.696 676.155 452.696H672.263V467.564ZM696.482 470.252C694.242 470.252 692.478 469.627 691.19 468.376C689.902 467.107 689.258 465.38 689.258 463.196C689.258 461.796 689.538 460.564 690.098 459.5C690.677 458.417 691.47 457.577 692.478 456.98C693.486 456.383 694.643 456.084 695.95 456.084C697.835 456.084 699.319 456.691 700.402 457.904C701.485 459.099 702.026 460.751 702.026 462.86V463.812H692.002C692.207 466.649 693.71 468.068 696.51 468.068C697.294 468.068 698.059 467.947 698.806 467.704C699.571 467.461 700.29 467.06 700.962 466.5L701.802 468.46C701.186 469.02 700.393 469.459 699.422 469.776C698.451 470.093 697.471 470.252 696.482 470.252ZM696.062 458.072C694.886 458.072 693.953 458.436 693.262 459.164C692.571 459.892 692.151 460.863 692.002 462.076H699.646C699.59 460.807 699.254 459.827 698.638 459.136C698.022 458.427 697.163 458.072 696.062 458.072ZM708.922 470L703.042 456.336H706.094L710.266 466.724L714.55 456.336H717.434L711.47 470H708.922ZM725.63 470.252C723.39 470.252 721.626 469.627 720.338 468.376C719.05 467.107 718.406 465.38 718.406 463.196C718.406 461.796 718.686 460.564 719.246 459.5C719.825 458.417 720.618 457.577 721.626 456.98C722.634 456.383 723.792 456.084 725.098 456.084C726.984 456.084 728.468 456.691 729.55 457.904C730.633 459.099 731.174 460.751 731.174 462.86V463.812H721.15C721.356 466.649 722.858 468.068 725.658 468.068C726.442 468.068 727.208 467.947 727.954 467.704C728.72 467.461 729.438 467.06 730.11 466.5L730.95 468.46C730.334 469.02 729.541 469.459 728.57 469.776C727.6 470.093 726.62 470.252 725.63 470.252ZM725.21 458.072C724.034 458.072 723.101 458.436 722.41 459.164C721.72 459.892 721.3 460.863 721.15 462.076H728.794C728.738 460.807 728.402 459.827 727.786 459.136C727.17 458.427 726.312 458.072 725.21 458.072ZM738.71 470.252C737.216 470.252 736.096 469.832 735.35 468.992C734.622 468.152 734.258 466.92 734.258 465.296V450.26H737.086V465.128C737.086 466.976 737.842 467.9 739.354 467.9C739.578 467.9 739.783 467.891 739.97 467.872C740.175 467.853 740.38 467.816 740.586 467.76L740.53 470.028C739.895 470.177 739.288 470.252 738.71 470.252ZM748.615 470.252C747.234 470.252 746.039 469.963 745.031 469.384C744.023 468.805 743.239 467.993 742.679 466.948C742.138 465.884 741.867 464.624 741.867 463.168C741.867 461.712 742.138 460.461 742.679 459.416C743.239 458.352 744.023 457.531 745.031 456.952C746.039 456.373 747.234 456.084 748.615 456.084C749.959 456.084 751.135 456.373 752.143 456.952C753.151 457.531 753.935 458.352 754.495 459.416C755.055 460.461 755.335 461.712 755.335 463.168C755.335 464.624 755.055 465.884 754.495 466.948C753.935 467.993 753.151 468.805 752.143 469.384C751.135 469.963 749.959 470.252 748.615 470.252ZM748.615 468.068C749.773 468.068 750.706 467.648 751.415 466.808C752.125 465.968 752.479 464.755 752.479 463.168C752.479 461.581 752.125 460.377 751.415 459.556C750.706 458.716 749.773 458.296 748.615 458.296C747.439 458.296 746.497 458.716 745.787 459.556C745.078 460.377 744.723 461.581 744.723 463.168C744.723 464.755 745.078 465.968 745.787 466.808C746.497 467.648 747.439 468.068 748.615 468.068ZM758.511 475.04V456.336H761.283V458.66C761.675 457.876 762.273 457.251 763.075 456.784C763.878 456.317 764.802 456.084 765.847 456.084C767.061 456.084 768.115 456.373 769.011 456.952C769.926 457.531 770.626 458.352 771.111 459.416C771.615 460.461 771.867 461.712 771.867 463.168C771.867 464.624 771.615 465.884 771.111 466.948C770.626 468.012 769.926 468.833 769.011 469.412C768.115 469.972 767.061 470.252 765.847 470.252C764.839 470.252 763.934 470.037 763.131 469.608C762.347 469.16 761.75 468.553 761.339 467.788V475.04H758.511ZM765.147 468.068C766.323 468.068 767.257 467.648 767.947 466.808C768.657 465.968 769.011 464.755 769.011 463.168C769.011 461.581 768.657 460.377 767.947 459.556C767.257 458.716 766.323 458.296 765.147 458.296C763.971 458.296 763.029 458.716 762.319 459.556C761.629 460.377 761.283 461.581 761.283 463.168C761.283 464.755 761.629 465.968 762.319 466.808C763.029 467.648 763.971 468.068 765.147 468.068ZM781.466 470.252C779.226 470.252 777.462 469.627 776.174 468.376C774.886 467.107 774.242 465.38 774.242 463.196C774.242 461.796 774.522 460.564 775.082 459.5C775.661 458.417 776.454 457.577 777.462 456.98C778.47 456.383 779.628 456.084 780.934 456.084C782.82 456.084 784.304 456.691 785.386 457.904C786.469 459.099 787.01 460.751 787.01 462.86V463.812H776.986C777.192 466.649 778.694 468.068 781.494 468.068C782.278 468.068 783.044 467.947 783.79 467.704C784.556 467.461 785.274 467.06 785.946 466.5L786.786 468.46C786.17 469.02 785.377 469.459 784.406 469.776C783.436 470.093 782.456 470.252 781.466 470.252ZM781.046 458.072C779.87 458.072 778.937 458.436 778.246 459.164C777.556 459.892 777.136 460.863 776.986 462.076H784.63C784.574 460.807 784.238 459.827 783.622 459.136C783.006 458.427 782.148 458.072 781.046 458.072ZM790.093 470V456.336H792.837V458.772C793.547 457.148 795.021 456.243 797.261 456.056L798.185 456L798.381 458.408L796.673 458.576C794.191 458.819 792.949 460.097 792.949 462.412V470H790.093Z"
                fill="#BEBEBE"
              />
            </g>
            <g id="Nav Bar">
              <g id="Text [nav titles]">
                <path
                  id="ABOUT"
                  d="M465.024 583L472.68 566.08H475.2L482.856 583H479.736L478.056 579.088H469.8L468.144 583H465.024ZM473.904 569.416L470.856 576.64H477L473.952 569.416H473.904ZM484.707 583V566.08H492.099C493.875 566.08 495.251 566.472 496.227 567.256C497.203 568.024 497.691 569.096 497.691 570.472C497.691 571.384 497.459 572.168 496.995 572.824C496.531 573.48 495.891 573.96 495.075 574.264C496.035 574.536 496.779 575.016 497.307 575.704C497.851 576.376 498.123 577.232 498.123 578.272C498.123 579.776 497.611 580.944 496.587 581.776C495.579 582.592 494.171 583 492.363 583H484.707ZM487.659 573.256H491.571C493.667 573.256 494.715 572.448 494.715 570.832C494.715 569.216 493.667 568.408 491.571 568.408H487.659V573.256ZM487.659 580.672H491.979C494.091 580.672 495.147 579.824 495.147 578.128C495.147 576.432 494.091 575.584 491.979 575.584H487.659V580.672ZM508.815 583.24C507.183 583.24 505.751 582.88 504.519 582.16C503.303 581.44 502.359 580.432 501.687 579.136C501.015 577.824 500.679 576.288 500.679 574.528C500.679 572.752 501.015 571.216 501.687 569.92C502.359 568.624 503.303 567.624 504.519 566.92C505.735 566.2 507.167 565.84 508.815 565.84C510.463 565.84 511.895 566.2 513.111 566.92C514.327 567.624 515.271 568.624 515.943 569.92C516.615 571.216 516.951 572.744 516.951 574.504C516.951 576.28 516.615 577.824 515.943 579.136C515.271 580.432 514.327 581.44 513.111 582.16C511.895 582.88 510.463 583.24 508.815 583.24ZM508.815 580.6C510.367 580.6 511.575 580.064 512.439 578.992C513.303 577.92 513.735 576.432 513.735 574.528C513.735 572.608 513.303 571.12 512.439 570.064C511.591 569.008 510.383 568.48 508.815 568.48C507.263 568.48 506.055 569.008 505.191 570.064C504.327 571.12 503.895 572.608 503.895 574.528C503.895 576.432 504.327 577.92 505.191 578.992C506.055 580.064 507.263 580.6 508.815 580.6ZM527.107 583.24C524.787 583.24 523.011 582.64 521.779 581.44C520.563 580.224 519.955 578.432 519.955 576.064V566.08H523.027V576.04C523.027 577.56 523.371 578.704 524.059 579.472C524.763 580.224 525.779 580.6 527.107 580.6C529.811 580.6 531.163 579.08 531.163 576.04V566.08H534.211V576.064C534.211 578.432 533.611 580.224 532.411 581.44C531.211 582.64 529.443 583.24 527.107 583.24ZM541.873 583V568.648H536.065V566.08H550.753V568.648H544.945V583H541.873Z"
                  fill="#F1EDF4"
                />
                <path
                  id="PROJECTS"
                  d="M598.848 583V566.08H606.192C608.048 566.08 609.48 566.544 610.488 567.472C611.496 568.4 612 569.696 612 571.36C612 573.024 611.496 574.328 610.488 575.272C609.48 576.2 608.048 576.664 606.192 576.664H601.92V583H598.848ZM601.92 574.24H605.712C607.92 574.24 609.024 573.28 609.024 571.36C609.024 569.456 607.92 568.504 605.712 568.504H601.92V574.24ZM614.504 583V566.08H621.848C623.704 566.08 625.136 566.528 626.144 567.424C627.152 568.304 627.656 569.544 627.656 571.144C627.656 572.408 627.328 573.456 626.672 574.288C626.016 575.104 625.072 575.656 623.84 575.944C624.656 576.2 625.328 576.816 625.856 577.792L628.688 583H625.304L622.376 577.6C622.088 577.072 621.744 576.712 621.344 576.52C620.96 576.328 620.464 576.232 619.856 576.232H617.576V583H614.504ZM617.576 573.952H621.32C623.56 573.952 624.68 573.04 624.68 571.216C624.68 569.408 623.56 568.504 621.32 568.504H617.576V573.952ZM638.424 583.24C636.792 583.24 635.36 582.88 634.128 582.16C632.912 581.44 631.968 580.432 631.296 579.136C630.624 577.824 630.288 576.288 630.288 574.528C630.288 572.752 630.624 571.216 631.296 569.92C631.968 568.624 632.912 567.624 634.128 566.92C635.344 566.2 636.776 565.84 638.424 565.84C640.072 565.84 641.504 566.2 642.72 566.92C643.936 567.624 644.88 568.624 645.552 569.92C646.224 571.216 646.56 572.744 646.56 574.504C646.56 576.28 646.224 577.824 645.552 579.136C644.88 580.432 643.936 581.44 642.72 582.16C641.504 582.88 640.072 583.24 638.424 583.24ZM638.424 580.6C639.976 580.6 641.184 580.064 642.048 578.992C642.912 577.92 643.344 576.432 643.344 574.528C643.344 572.608 642.912 571.12 642.048 570.064C641.2 569.008 639.992 568.48 638.424 568.48C636.872 568.48 635.664 569.008 634.8 570.064C633.936 571.12 633.504 572.608 633.504 574.528C633.504 576.432 633.936 577.92 634.8 578.992C635.664 580.064 636.872 580.6 638.424 580.6ZM647.015 583.216L646.799 580.696L648.503 580.6C649.927 580.504 650.639 579.72 650.639 578.248V566.08H653.711V578.224C653.711 581.264 652.135 582.896 648.983 583.12L647.015 583.216ZM657.418 583V566.08H668.674V568.528H660.37V573.184H668.146V575.632H660.37V580.552H668.674V583H657.418ZM679.587 583.24C677.827 583.24 676.315 582.888 675.051 582.184C673.803 581.464 672.843 580.456 672.171 579.16C671.499 577.848 671.163 576.304 671.163 574.528C671.163 572.752 671.499 571.216 672.171 569.92C672.843 568.624 673.803 567.624 675.051 566.92C676.315 566.2 677.827 565.84 679.587 565.84C680.723 565.84 681.795 566.016 682.803 566.368C683.827 566.72 684.667 567.224 685.323 567.88L684.315 570.328C683.595 569.72 682.859 569.28 682.107 569.008C681.355 568.72 680.547 568.576 679.683 568.576C677.971 568.576 676.667 569.096 675.771 570.136C674.875 571.16 674.427 572.624 674.427 574.528C674.427 576.432 674.875 577.904 675.771 578.944C676.667 579.984 677.971 580.504 679.683 580.504C680.547 580.504 681.355 580.368 682.107 580.096C682.859 579.808 683.595 579.36 684.315 578.752L685.323 581.2C684.667 581.84 683.827 582.344 682.803 582.712C681.795 583.064 680.723 583.24 679.587 583.24ZM691.85 583V568.648H686.042V566.08H700.73V568.648H694.922V583H691.85ZM707.946 583.24C706.618 583.24 705.386 583.072 704.25 582.736C703.114 582.384 702.154 581.912 701.37 581.32L702.306 578.896C703.09 579.456 703.946 579.888 704.874 580.192C705.818 580.496 706.842 580.648 707.946 580.648C709.21 580.648 710.13 580.44 710.706 580.024C711.282 579.592 711.57 579.04 711.57 578.368C711.57 577.808 711.362 577.368 710.946 577.048C710.546 576.728 709.85 576.464 708.858 576.256L706.218 575.704C703.21 575.064 701.706 573.52 701.706 571.072C701.706 570.016 701.986 569.096 702.546 568.312C703.106 567.528 703.882 566.92 704.874 566.488C705.866 566.056 707.01 565.84 708.306 565.84C709.458 565.84 710.538 566.016 711.546 566.368C712.554 566.704 713.394 567.184 714.066 567.808L713.13 570.112C711.802 568.992 710.186 568.432 708.282 568.432C707.178 568.432 706.314 568.664 705.69 569.128C705.066 569.592 704.754 570.2 704.754 570.952C704.754 571.528 704.946 571.992 705.33 572.344C705.714 572.68 706.37 572.944 707.298 573.136L709.914 573.688C711.498 574.024 712.674 574.552 713.442 575.272C714.226 575.992 714.618 576.952 714.618 578.152C714.618 579.16 714.346 580.048 713.802 580.816C713.258 581.584 712.482 582.184 711.474 582.616C710.482 583.032 709.306 583.24 707.946 583.24Z"
                  fill="#F1EDF4"
                />
                <path
                  id="CONTACT"
                  d="M778.72 583.24C776.96 583.24 775.448 582.888 774.184 582.184C772.936 581.464 771.976 580.456 771.304 579.16C770.632 577.848 770.296 576.304 770.296 574.528C770.296 572.752 770.632 571.216 771.304 569.92C771.976 568.624 772.936 567.624 774.184 566.92C775.448 566.2 776.96 565.84 778.72 565.84C779.856 565.84 780.928 566.016 781.936 566.368C782.96 566.72 783.8 567.224 784.456 567.88L783.448 570.328C782.728 569.72 781.992 569.28 781.24 569.008C780.488 568.72 779.68 568.576 778.816 568.576C777.104 568.576 775.8 569.096 774.904 570.136C774.008 571.16 773.56 572.624 773.56 574.528C773.56 576.432 774.008 577.904 774.904 578.944C775.8 579.984 777.104 580.504 778.816 580.504C779.68 580.504 780.488 580.368 781.24 580.096C781.992 579.808 782.728 579.36 783.448 578.752L784.456 581.2C783.8 581.84 782.96 582.344 781.936 582.712C780.928 583.064 779.856 583.24 778.72 583.24ZM794.159 583.24C792.527 583.24 791.095 582.88 789.863 582.16C788.647 581.44 787.703 580.432 787.031 579.136C786.359 577.824 786.023 576.288 786.023 574.528C786.023 572.752 786.359 571.216 787.031 569.92C787.703 568.624 788.647 567.624 789.863 566.92C791.079 566.2 792.511 565.84 794.159 565.84C795.807 565.84 797.239 566.2 798.455 566.92C799.671 567.624 800.615 568.624 801.287 569.92C801.959 571.216 802.295 572.744 802.295 574.504C802.295 576.28 801.959 577.824 801.287 579.136C800.615 580.432 799.671 581.44 798.455 582.16C797.239 582.88 795.807 583.24 794.159 583.24ZM794.159 580.6C795.711 580.6 796.919 580.064 797.783 578.992C798.647 577.92 799.079 576.432 799.079 574.528C799.079 572.608 798.647 571.12 797.783 570.064C796.935 569.008 795.727 568.48 794.159 568.48C792.607 568.48 791.399 569.008 790.535 570.064C789.671 571.12 789.239 572.608 789.239 574.528C789.239 576.432 789.671 577.92 790.535 578.992C791.399 580.064 792.607 580.6 794.159 580.6ZM805.418 583V566.08H807.722L816.818 577.888V566.08H819.674V583H817.394L808.274 571.144V583H805.418ZM827.451 583V568.648H821.643V566.08H836.331V568.648H830.523V583H827.451ZM834.579 583L842.235 566.08H844.755L852.411 583H849.291L847.611 579.088H839.355L837.699 583H834.579ZM843.459 569.416L840.411 576.64H846.555L843.507 569.416H843.459ZM861.783 583.24C860.023 583.24 858.511 582.888 857.247 582.184C855.999 581.464 855.039 580.456 854.367 579.16C853.695 577.848 853.359 576.304 853.359 574.528C853.359 572.752 853.695 571.216 854.367 569.92C855.039 568.624 855.999 567.624 857.247 566.92C858.511 566.2 860.023 565.84 861.783 565.84C862.919 565.84 863.991 566.016 864.999 566.368C866.023 566.72 866.863 567.224 867.519 567.88L866.511 570.328C865.791 569.72 865.055 569.28 864.303 569.008C863.551 568.72 862.743 568.576 861.879 568.576C860.167 568.576 858.863 569.096 857.967 570.136C857.071 571.16 856.623 572.624 856.623 574.528C856.623 576.432 857.071 577.904 857.967 578.944C858.863 579.984 860.167 580.504 861.879 580.504C862.743 580.504 863.551 580.368 864.303 580.096C865.055 579.808 865.791 579.36 866.511 578.752L867.519 581.2C866.863 581.84 866.023 582.344 864.999 582.712C863.991 583.064 862.919 583.24 861.783 583.24ZM874.045 583V568.648H868.237V566.08H882.925V568.648H877.117V583H874.045Z"
                  fill="#F1EDF4"
                />
              </g>
              <g id="Slashes [var]">
                <path
                  id="/"
                  d="M570.776 584.704L568.52 584.032L574.736 564.76L576.992 565.432L570.776 584.704Z"
                  fill="#FA3663"
                />
                <path
                  id="/_2"
                  d="M739.776 584.704L737.52 584.032L743.736 564.76L745.992 565.432L739.776 584.704Z"
                  fill="#FA3663"
                />
              </g>
            </g>
          </motion.g>
          <g id="invis nav rects">
            <rect
              onClick={aboutRefHandler}
              style={{ cursor: "pointer" }}
              id="About rect"
              x="457"
              y="557"
              width="102"
              height="36"
              fill="#C4C4C4"
              fillOpacity="0.01"
            />
            <rect
              onClick={projectRefHandler}
              style={{ cursor: "pointer" }}
              id="Project rect"
              x="590"
              y="557"
              width="134"
              height="36"
              fill="#C4C4C4"
              fillOpacity="0.01"
            />
            <rect
              onClick={contactRefHandler}
              style={{ cursor: "pointer" }}
              id="Contact rect"
              x="761"
              y="557"
              width="131"
              height="36"
              fill="#C4C4C4"
              fillOpacity="0.01"
            />
          </g>
          <defs>
            <radialGradient
              id="paint0_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(673 408.5) rotate(90) scale(408.5 673)"
            >
              <stop stopColor="#1C1C1C" />
              <stop offset="1" stopOpacity="0" />
            </radialGradient>
            <linearGradient
              id="paint1_linear"
              x1="822"
              y1="349"
              x2="753"
              y2="349"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FA3663" />
              <stop offset="1" stopColor="#FA3663" stopOpacity="0.09" />
            </linearGradient>
            <linearGradient
              id="paint2_linear"
              x1="745.5"
              y1="426"
              x2="760"
              y2="357"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF6CA5" />
              <stop offset="1" stopColor="#FF6CA5" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient
              id="paint3_linear"
              x1="760"
              y1="447.5"
              x2="697"
              y2="447"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FA3663" />
              <stop offset="1" stopColor="#FA3663" stopOpacity="0.21" />
            </linearGradient>
            <linearGradient
              id="paint4_linear"
              x1="672.5"
              y1="515"
              x2="719.5"
              y2="394.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF6CA5" />
              <stop offset="1" stopColor="#FF6CA5" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint5_linear"
              x1="602"
              y1="410.5"
              x2="602"
              y2="483"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FA3663" />
              <stop offset="1" stopColor="#FA3663" stopOpacity="0.7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default LandingScreen;

const styles = {
  container: {
    backgroundColor: "#000000",
    height: "100vh",
    maxWidth: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
