import * as React from 'react';
import styles from './AlertMarquee.module.scss';
import { IAlertMarqueeProps } from './IAlertMarqueeProps';
import { escape } from '@microsoft/sp-lodash-subset';
import * as jQuery from "jquery";
import pnp from 'sp-pnp-js';
import Send from '@material-ui/icons/VolumeUp';
import Marquee from 'react-double-marquee';
import { ClassMarquee } from './ClassMarquee';



export default class AlertMarquee extends React.Component<IAlertMarqueeProps, any> {

  public constructor(props:IAlertMarqueeProps, any)
  {
  super(props);
  this.state={
      items:[]
  };
  }

  //: React.ReactElement<IAlertMarqueeProps>

  public render() {
    return (
      jQuery("#workbenchPageContent").prop("style", "max-width: none"), jQuery(".SPCanvas-canvas").prop("style", "max-width: none"), jQuery(".CanvasZone").prop("style", "max-width: none"), 


      
              <div className={`ms-Grid ${styles.container}`} dir="ltr">
                <div className="ms-Grid-row">
                <div className={styles.A}>
                <span className={styles.megaphone}><i className={`ms-Icon ms-Icon--Megaphone`} aria-hidden="false"></i></span>  Alert
                    </div>
                  {/* ms-Grid-col ms-sm6 ms-md4 ms-lg2 */}
                  <div className={styles.B}  style={{whiteSpace: 'nowrap'}} dir="ltr">

                      <Marquee direction="left">  

                      {
                    this.state.items.map((item:IAlertMarqueeProps)=>{
                        return(
                         
                            <>{item.Title} &nbsp;&nbsp;</>
                        );
                    })
                }
      
                      </Marquee>
                    
                  </div>
                  {/*"ms-Grid-col ms-sm6 ms-md8 ms-lg10"*/}
               </div>
              </div>
       


   
  );
}
public componentDidMount()
{
    // debugger;
    this._CarouselList();
}
private _CarouselList():void
{
  //.items.select("Title")
    // pnp.sp.web.lists.getByTitle("Site Pages").items.filter("IsFeaturedNews eq ('Important Notice')").get().then
    pnp.sp.web.lists.getByTitle(`headlines`).items.select("Title").get().then
    ((response)=>{
        let CarouselCollection=response.map(item=> new ClassMarquee(item));
        this.setState({items:CarouselCollection});
    }

    );
}
}
{/* <div  style={{
        width: '100%',
        height: '3rem',
        whiteSpace: 'nowrap',
        padding: '0.5rem'
      }}>
        <div className={styles.alertBtns}><h3><i><Send /> </i>Alert</h3></div>
        <div className={styles.alertMarquee}>
      <Marquee>
        
        
      {
                    this.state.items.map((item:IAlertMarqueeProps)=>{
                        return(
                         
                            <><b>{item.Title}</b> &nbsp;&nbsp;</>
                        );
                    })
                }
                  
        
              </Marquee> 
      </div>
    </div> */}








      // <div className={ styles.alertMarquee }>
      //   <div className={ styles.container }>
      //     <div className={ styles.row }>
              // <div className="ms-Grid" dir="ltr">
              //   <div className="ms-Grid-row">
              //     <div className={styles.A}>A</div>
              //     {/* ms-Grid-col ms-sm6 ms-md4 ms-lg2 */}
              //     <div className={styles.B}>B</div>
              //     {/*"ms-Grid-col ms-sm6 ms-md8 ms-lg10"*/}
              //   </div>
              // </div>
      //     </div>
      //   </div>
      // </div>
