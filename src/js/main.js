import movingBar from "./module/movingBar";
import pageNavigation from "./module/pageNavigation";
import canUseWebp from "./module/canUseWebp";
import smoothScroll from "./module/smoothScroll";
import searchForm from "./module/searchForm";
import searchMatches from "./module/searchMatches";
import previewSlider from "./module/previewSlider";
import hidePreviewSlides from "./module/showPreviewSlides";
import modifiedCarsSlider from "./module/modifiedCarsSlider";
import showBlocks from "./module/showBlocks";
import mobileMenuNetworkCarModels from "./module/mobileMenuNetworkCarModels";
import showYearsNetworkCarModels from "./module/showYearsNetworkCarModels";
import accordion from "./module/accordion";
import filter from "./module/filter";
import siteSelect from "./module/siteSelect";
import footerLinks from "./module/footerLinks";
import customSelect from "./module/customSelect";
import hideText from "./module/hideText";
import hideBlock from "./module/hideBlock";
import addAnswer from "./module/addAnswer";
import slimselect from "./module/slimselect";
import modal from "./module/modal";
import charts from "./module/charts";
import select2 from "./module/select2";
import tabs from "./module/tabs";
import modelSlider from "./module/modelSlider";
import popupGallery from "./module/popupGallery";
// import adressMap from "./module/adressMap";
import catalogLineSlider from "./module/catalogLineSlider";

$(window).on("load",function(){
    svg4everybody({});
    pageNavigation();
    canUseWebp();
    smoothScroll();
    movingBar();
    searchForm();
    searchMatches();
    previewSlider();
    hidePreviewSlides();
    modifiedCarsSlider();
    showBlocks();
    mobileMenuNetworkCarModels();
    showYearsNetworkCarModels();
    accordion();
    filter();
    siteSelect();
    footerLinks();
    customSelect();
    hideText();
    hideBlock();
    addAnswer();
    slimselect();
    modal();
    charts();
    select2();
    tabs();
    modelSlider();
    popupGallery();
    // adressMap();
    catalogLineSlider();
});

