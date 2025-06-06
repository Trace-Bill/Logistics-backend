module.exports = ({shipments}) => {
	const base64Image = shipments?.customer_sign
    ?.replace(/(\r\n|\n|\r)/gm, "") // Remove line breaks
    ?.replace(/^data:image\/png;base64,/, ""); 
  return `
         <!DOCTYPE html>
  <html>
<head>
	<title>BOL</title>
	<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
</head>
<body >
	<table  cellspacing="0" cellpadding="0" style="width: 100%;max-width: 856px;margin: auto;font-family: 'Inter', serif;">
		<tr>
			<td style="padding: 20px 20px;">
				<table cellspacing="0" cellpadding="0" style="width: 100%;">
					<tr>
						<td width="50%">
							<img src="https://logistics-sand.vercel.app/Logo.png" alt="img" height="50px"/>
						</td>
						<td width="50%">
							<h2 style="color: #1B1B1B;font-size: 16px;padding-bottom: 5px;margin: 0;text-transform: uppercase;font-weight: 500;">Short form of bill of landing</h2>
							<p style="color: #1B1B1B;font-size: 14px;margin: 0;"><strong>fb #: 7889285</strong></p>
						</td>
					</tr>
					
				</table>
			</td>
		</tr>
		<tr>
			<td>
				<img src="https://logistics-sand.vercel.app/Line.png" alt="img" />
			</td>
		</tr> 
	</table>
	<table cellspacing="0" cellpadding="0" style="width: 100%;max-width: 856px;margin: auto;font-family: 'Inter', serif;">
		<tr>
			<td valign="top" width="50%" style="color: #1B1B1B;font-weight: bold;text-transform: uppercase;font-size: 14px;padding: 20px 10px 20px 20px;">
				<table cellspacing="0" cellpadding="0" style="width: 100%;">
					 <tr>
					 	<td width="128px" style="padding-bottom: 10px;">Effective date :</td>
					 	<td style="color: #7A7A7A;padding-bottom: 10px;">${shipments?.shippingDate || ""}</td>
					 </tr>
					  <tr>
					 	<td style="padding-bottom: 10px;">equipment :</td>
					 	<td style="color: #7A7A7A;padding-bottom: 10px;">53vn</td>
					 </tr>
					  <tr>
					 	<td style="padding-bottom: 10px;">commodity :</td>
					 	<td style="color: #7A7A7A;padding-bottom: 10px;">${shipments?.typeOfGoods || ""}</td>
					 </tr>
				</table> 
			</td>			
			<td valign="top" width="50%" style="color: #1B1B1B;font-weight: bold;text-transform: uppercase;font-size: 14px;padding: 20px 10px 20px 10px;;">
				<table cellspacing="0" cellpadding="0" style="width: 100%;">
					 <tr>
					 	<td style="padding-bottom: 10px;">Carrier :</td>
					 	<td style="color: #7A7A7A;padding-bottom: 10px;">${shipments?.carrier_id?.name || ""}</td>
					 </tr>
					  <tr>
					 	<td style="padding-bottom: 10px;">Broker # :</td>
					 	<td style="color: #7A7A7A;padding-bottom: 10px;">${shipments?.broker_id?.name || ""}</td>
					 </tr>
					  <tr>
					 	<td style="padding-bottom: 10px;">Quantity :</td>
					 	<td style="color: #7A7A7A;padding-bottom: 10px;">${shipments?.quantity || ""}</td>
					 </tr>
				</table> 
			</td> 
			<!--<td valign="top" width="30%" style="color: #1B1B1B;font-weight: bold;text-transform: uppercase;font-size: 14px;padding: 20px 20px 20px 10px;	;">-->
			<!--	<table  cellspacing="15" cellpadding="0" style="width: 100%;border:1px solid #a5a5a5;">-->
			<!--		 <tr>-->
			<!--		 	<td  style="padding-bottom: 15px;">Effective date :</td> -->
			<!--		 </tr> -->
			<!--		  <tr>-->
			<!--		 	<td style="border-top:1px solid #cbb1b1;padding-top: 10px;">commodity :</td> -->
			<!--		 </tr>-->
			<!--	</table> -->
			<!--</td>-->
		</tr>
		<tr>
			<td valign="top" width="35%" style="color: #1B1B1B;font-weight: bold;text-transform: uppercase;font-size: 14px;padding: 20px 10px 20px 20px;">
				<table cellspacing="0" cellpadding="0" style="width: 100%;">
					 <tr>
					 	<td width="128px" style="padding-bottom: 10px;">Dimention :</td>
					 	<td style="color: #7A7A7A;padding-bottom: 10px;">${shipments?.dimensions || ""}</td>
					 </tr>
					  <tr>
					 	<td style="padding-bottom: 10px;">Weight :</td>
					 	<td style="color: #7A7A7A;padding-bottom: 10px;">${shipments?.weight || ""}</td>
					 </tr>
					  <tr>
					 	<td style="padding-bottom: 10px;">Payment :</td>
					 	<td style="color: #7A7A7A;padding-bottom: 10px;">${shipments?.paymentStatus || ""}</td>
					 </tr>
				</table> 
			</td>			
			<td valign="top" width="35%" style="color: #1B1B1B;font-weight: bold;text-transform: uppercase;font-size: 14px;padding: 20px 10px 20px 10px;;">
				<table cellspacing="0" cellpadding="0" style="width: 100%;">
					 <tr>
					 	<td style="padding-bottom: 10px;">Driver: </td>
					 	<td style="color: #7A7A7A;padding-bottom: 10px;">${shipments?.driver_id?.name || ""}</td>
					 </tr>
					  <tr>
					 	<td style="padding-bottom: 10px;">Contact: </td>
					 	<td style="color: #7A7A7A;padding-bottom: 10px;">${shipments?.driver_id?.contact || ""}</td>
					 </tr>
					  <tr>
					 	<td style="padding-bottom: 10px;">Company:</td>
					 	<td style="color: #7A7A7A;padding-bottom: 10px;">${shipments?.driver_id?.company_name || ""}</td>
					 </tr>
				</table> 
			</td> 
			<!--<td valign="top" width="30%" style="color: #1B1B1B;font-weight: bold;text-transform: uppercase;font-size: 14px;padding: 20px 20px 20px 10px;	;">-->
			<!--	<table cellspacing="0" cellpadding="0" style="width: 100%;">-->
			<!--		 <tr>-->
			<!--		 	<td style="padding-bottom: 10px;">High Risk:</td>-->
			<!--		 	<td style="color: #7A7A7A;padding-bottom: 10px;"> </td>-->
			<!--		 </tr>-->
			<!--		  <tr>-->
			<!--		 	<td style="padding-bottom: 10px;">Tarp:</td>-->
			<!--		 	<td style="color: #7A7A7A;padding-bottom: 10px;"> </td>-->
			<!--		 </tr> -->
			<!--	</table> -->
			<!--</td>-->
		</tr>
		<tr>
			<td colspan="3">
				<p style="font-size:14px;color: #1B1B1B; text-align: center;margin: 0 0 10px; ">Any question or concerns about this load please call agency: <strong>(210) 468-7791)</strong></p>
				<p style="font-size:14px;color: #1B1B1B; text-align: center;margin: 0 0 10px;"><strong>IMPORTANT :</strong> Carrier call agent if your dispatch instructions below differ from bill	 of lading</p>
			</td>
		</tr>		
	</table>
	<table cellspacing="0" cellpadding="0" style="width: 100%;;max-width: 856px;margin: auto;font-family: 'Inter', serif;">
		<tr>
			<td style="padding: 5px 20px 5px;">
				<table cellspacing="0" cellpadding="0" style="width: 100%;border: 1px solid #a5a5a5">
					<tr>
					   <td valign="top" width="75%" >
					   	   <table cellspacing="0" cellpadding="0" style="width: 100%;" >
					   	   	  <tr>
					   	   	  	<td width="25%" style="color: #1B1B1B;font-weight: bold;text-transform: uppercase;font-size: 14px;padding: 7px 10px 5px 10px;border-right: 1px solid #a5a5a5;">Pick- up date:</td>
					   	   	  	<td width="75%" style="color: #1B1B1B;font-size: 14px;padding: 10px 10px 5px 10px;">${shipments?.shippingDate || ""}</td>
					   	   	  </tr>
					   	   	  <tr>
					   	   	  	<td style="color: #1B1B1B;font-weight: bold;text-transform: uppercase;font-size: 14px;padding: 5px 10px 7px 10px;border-right: 1px solid #a5a5a5;border-bottom: 1px solid #a5a5a5;">Address:</td>
					   	   	  	<td style="color: #1B1B1B;font-size: 14px;padding: 5px 10px 7px 10px;">${shipments?.pickup_location || ""} </td>
					   	   	  </tr>
					   	   </table>
					   </td>	
					   <!--<td valign="top"  width="25%">-->
					   <!--	   <table cellspacing="0" cellpadding="0" style="width: 100%;" >-->
					   <!--	   	  <tr>-->
					   <!--	   	  	<td  style="color: #1B1B1B;font-weight: bold;text-transform: uppercase;font-size: 14px;padding: 7px 10px 5px 10px; ">contact :</td>-->
					   <!--	   	  	<td   style="color: #1B1B1B;font-size: 14px;padding: 10px 10px 5px 10px;">8458798779</td>-->
					   <!--	   	  </tr>-->
					   <!--	   	  <tr>-->
					   <!--	   	  	<td style="color: #1B1B1B;font-weight: bold;text-transform: uppercase;font-size: 14px;padding: 5px 10px 7px 10px; ">phone :</td>-->
					   <!--	   	  	<td style="color: #1B1B1B;font-size: 14px;padding: 5px 10px 7px 10px;">8458798779</td>-->
					   <!--	   	  </tr>-->
					   <!--	   </table>-->
					   <!--</td>			-->
					</tr>
					<tr>
						<td height="15px"></td>
					</tr>
					<tr>
					   <td valign="top" width="75%" >
					   	   <table cellspacing="0" cellpadding="0" style="width: 100%;" >
					   	   	  <tr>
					   	   	  	<td width="25%" style="color: #1B1B1B;font-weight: bold;text-transform: uppercase;font-size: 14px;padding: 7px 10px 5px 10px; ">Shipper Name :</td>
					   	   	  	<td width="75%" style="color: #1B1B1B;font-size: 14px;padding: 10px 10px 5px 10px;">${shipments?.shipper_id?.name || ""}</td>
					   	   	  </tr>
					   	   	  <tr>
					   	   	  	<td style="color: #1B1B1B;font-weight: bold;text-transform: uppercase;font-size: 14px;padding: 5px 10px 7px 10px;">Contact :</td>
					   	   	  	<td style="color: #1B1B1B;font-size: 14px;padding: 5px 10px 7px 10px;">${shipments?.shipper_id?.contact || ""} </td>
					   	   	  </tr>
					   	   </table>
					   </td>	
					   <td valign="top"  width="25%">
					   	    
					   </td>			
					</tr>
				</table>
			</td>
		</tr> 
		<tr>
			<td style="padding: 5px 20px 5px;">
				<table cellspacing="0" cellpadding="0" style="width: 100%;border: 1px solid #a5a5a5">
					<tr>
					   <td valign="top" width="75%" >
					   	   <table cellspacing="0" cellpadding="0" style="width: 100%;" >
					   	   	  <tr>
					   	   	  	<td width="25%" style="color: #1B1B1B;font-weight: bold;text-transform: uppercase;font-size: 14px;padding: 7px 10px 5px 10px;border-right: 1px solid #a5a5a5;">delivery date :</td>
					   	   	  	<td width="75%" style="color: #1B1B1B;font-size: 14px;padding: 10px 10px 5px 10px;">${shipments?.deliveryDateExpect || ""}</td>
					   	   	  </tr>
					   	   	  <tr>
					   	   	  	<td style="color: #1B1B1B;font-weight: bold;text-transform: uppercase;font-size: 14px;padding: 5px 10px 7px 10px;border-right: 1px solid #a5a5a5;border-bottom: 1px solid #a5a5a5;">Address:</td>
					   	   	  	<td style="color: #1B1B1B;font-size: 14px;padding: 5px 10px 7px 10px;">${shipments?.drop_location || ""} </td>
					   	   	  </tr>
					   	   </table>
					   </td>	
					   <!--<td valign="top"  width="25%">-->
					   <!--	   <table cellspacing="0" cellpadding="0" style="width: 100%;" >-->
					   <!--	   	  <tr>-->
					   <!--	   	  	<td  style="color: #1B1B1B;font-weight: bold;text-transform: uppercase;font-size: 14px;padding: 7px 10px 5px 10px; ">contact :</td>-->
					   <!--	   	  	<td   style="color: #1B1B1B;font-size: 14px;padding: 10px 10px 5px 10px;">8458798779</td>-->
					   <!--	   	  </tr>-->
					   <!--	   	  <tr>-->
					   <!--	   	  	<td style="color: #1B1B1B;font-weight: bold;text-transform: uppercase;font-size: 14px;padding: 5px 10px 7px 10px; ">phone :</td>-->
					   <!--	   	  	<td style="color: #1B1B1B;font-size: 14px;padding: 5px 10px 7px 10px;">8458798779</td>-->
					   <!--	   	  </tr>-->
					   <!--	   </table>-->
					   <!--</td>			-->
					</tr>
					<tr>
						<td height="15px"></td>
					</tr>
					<tr>
					   <td valign="top" width="75%" >
					   	   <table cellspacing="0" cellpadding="0" style="width: 100%;" >
					   	   	  <tr>
					   	   	  	<td width="25%" style="color: #1B1B1B;font-weight: bold;text-transform: uppercase;font-size: 14px;padding: 7px 10px 5px 10px; ">Customer Name :</td>
					   	   	  	<td width="75%" style="color: #1B1B1B;font-size: 14px;padding: 10px 10px 5px 10px;">${shipments?.customer_id?.name || ""}</td>
					   	   	  </tr>
					   	   	  <tr>
					   	   	  	<td style="color: #1B1B1B;font-weight: bold;text-transform: uppercase;font-size: 14px;padding: 5px 10px 7px 10px;">Contact :</td>
					   	   	  	<td style="color: #1B1B1B;font-size: 14px;padding: 5px 10px 7px 10px;">
					   	   	  	    ${shipments?.customer_id?.contact}
					   	   	  	</td>
					   	   	  </tr>
					   	   </table>
					   </td>	
					   <td valign="top"  width="25%">
					   	    
					   </td>			
					</tr>
				</table>
			</td>
		</tr>
		<tr>
			<td style="padding: 5px 20px 5px;">
				<table cellspacing="0" cellpadding="0" style="width: 100%;border: 1px solid #a5a5a5">  
		   	   	  <tr>
					   <!--<td valign="bottom" width="50%">-->
					   <!--	   <table cellspacing="0" cellpadding="0" style="width: 100%;">-->
					   <!--	   	  <tbody><tr>-->
					   <!--	   	  	<td width="35%" style="color: #1B1B1B;font-weight: bold;text-transform: uppercase;font-size: 14px;padding: 7px 10px 5px 10px; ">additional</td>-->
					   <!--	   	  	<td width="65%" style="color: #1B1B1B;font-size: 14px;padding: 10px 10px 5px 10px;"></td>-->
					   <!--	   	  </tr>-->
					   <!--	   	  <tr>-->
					   <!--	   	  	<td style="color: #1B1B1B;font-weight: bold;text-transform: uppercase;font-size: 14px;padding: 5px 10px 7px 10px; ">instructions :</td>-->
					   <!--	   	  	<td style="color: #1B1B1B;font-size: 14px;padding: 5px 10px 7px 10px;"> </td>-->
					   <!--	   	  </tr>-->
					   <!--	   </tbody></table>-->
					   <!--</td>	-->
					   <td valign="bottom" width="100%">
					   	   <table cellspacing="0" cellpadding="0" style="width: 100%;">
					   	   	  <tbody><tr>
					   	   	  	<td style="color: #1B1B1B;font-weight: bold;text-transform: uppercase;font-size: 14px;padding: 7px 10px 5px 10px; ">  </td> 
					   	   	  </tr>
					   	   	  <tr>
					   	   	  	<td style="color: #1B1B1B;font-weight: bold; font-size: 20px;padding: 5px 10px 7px 0px;text-align: right; ">Total Carrier Pay : $${shipments?.cost || ""} </td> 
					   	   	  </tr>
					   	   </tbody>
					   	</table>
					   </td>			
					</tr>
					<tr>
					   <td valign="bottom" width="50%" colspan="2" style="padding: 10px;color: #1B1B1B;font-weight: bold; font-size: 14px; text-align: right; ">
					       <!--GET PAID IN 2 DAYS! CALL 1-866-321-PLUS (7587) TO LEARN HOW! -->

					   </td>	 		
					</tr>
		   	   </table>
			</td>
		</tr>
	</table>
	<table cellspacing="0" cellpadding="0" style="width: 100%;;max-width: 856px;margin: auto;font-family: 'Inter', serif;">
		<tr>
			<td style="padding: 5px 20px 5px;">
				<table cellspacing="0" cellpadding="0" style="width: 100%; ">
					<tr>
					   <td valign="top" width="60%" >
					   	   <table cellspacing="0" cellpadding="0" style="width: 100%;" >
					   	   	  <tr>
					   	   	  	<td width="50%" style="color: #1B1B1B;;font-size: 14px;padding: 7px 10px 5px 0;">Logistic Management agent:</td>
					   	   	  	<td width="50%" style="color: #1B1B1B;font-size: 14px;padding: 10px 10px 5px 10px;">${shipments?.broker_id?.name || ""}</td>
					   	   	  </tr>
					   	   	  <tr>
					   	   	  	<td style="color: #1B1B1B;;font-size: 14px;padding: 5px 10px 7px 0;">Agent Contact:</td>
					   	   	  	<td style="color: #1B1B1B;font-size: 14px;padding: 5px 10px 7px 10px;">${shipments?.broker_id?.contact || ""} </td>
					   	   	  </tr>
					   	   	   <tr>
					   	   	  	<td style="color: #1B1B1B;;font-size: 14px;padding: 5px 10px 7px 0;">Agent Email:</td>
					   	   	  	<td style="color: #1B1B1B;font-size: 14px;padding: 5px 10px 7px 10px;">${shipments?.broker_id?.email || ""}</td>
					   	   	  </tr>
					   	   	  <tr>
					   	   	  	<td style="color: #1B1B1B;;font-size: 14px;padding: 5px 10px 7px 0;">Driver Signature:</td>
					   	   	  	<td style="color: #1B1B1B;font-size: 14px;padding: 5px 10px 7px 10px;">
					   	   	  	    <img
									src="${shipments?.driver_sign || ""}"
									width="100px"
									height="50px"
									/>
					   	   	  	</td>
					   	   	  </tr>
					   	   </table>
					   </td>	
					   <td valign="top"  width="40%" >
					   	   <table cellspacing="0" cellpadding="0" style="width: 100%;" >
					   	   	  <tr>
					   	   	  	<td width="50%"  style="color: #1B1B1B;;font-size: 14px;padding: 7px 10px 5px 10px; ">carrier :</td>
					   	   	  	<td width="60%"  style="color: #1B1B1B;font-size: 14px;padding: 10px 0 5px 10px;">${shipments?.carrier_id?.name || ""}</td>
					   	   	  </tr>
					   	   	  <tr>
					   	   	  	<td colspan="2" style="color: #1B1B1B;;font-size: 14px;padding: 5px 0 7px 10px; ">
					   	   	  		<table cellspacing="0" cellpadding="0" style="width: 100%;border: 1px solid #a5a5a5;" >
							   	   	  <tr>
							   	   	  	<td width="45%" style="color: #1B1B1B;;font-size: 14px;padding: 7px 10px 5px 10px;">Customer:</td>
							   	   	  	<td width="65%" style="color: #1B1B1B;font-size: 14px;padding: 10px 10px 5px 10px;">${shipments?.customer_id?.name || ""}</td>
							   	   	  </tr>
							   	   	  <tr>
							   	   	  	<td width="45%" style="color: #1B1B1B;;font-size: 14px;padding: 7px 10px 5px 10px;">signature :</td>
							   	   	  	<td width="65%" style="color: #1B1B1B;font-size: 14px;padding: 10px 10px 5px 10px;">
												${
													base64Image
													  ? `<img src="data:image/png;base64,${base64Image}" 
															  width="100px" 
															  height="50px" 
															  alt="Customer Signature"
															  style="object-fit: contain; border: 1px solid #ccc;" />`
													  : "<p>NA</p>"
												  }
									</td>
							   	   	  </tr>
							   	   </table>
					   	   	  		
					   	   	  	</td> 
					   	   	  </tr>
					   	   </table>
					   </td>			
					</tr> 
				</table>
			</td>
		</tr>
		<tr>
			<td style="padding: 10px 20px 10px;">
				<table cellspacing="0" cellpadding="0" style="width: 100%; ">
					<tr>
						<td width="45%">
							<table cellspacing="0" cellpadding="0" style="width: 100%; ">
								<tr>
									<td width="30%" style="color: #1B1B1B;;font-size: 14px;padding: 5px 0;">Shipping date: ${shipments?.shippingDate || ""}</td>
									<!--<td width="70%" style="color: #1B1B1B;;font-size: 14px;padding: 5px 0;">${shipments?.shippingDate || ""}</td> -->
								</tr>
							</table>
						</td>
						<td width="10%">
							<!--<table cellspacing="0" cellpadding="0" style="width: 100%; ">-->
							<!--	<tr>-->
							<!--		<td width="35%" style="color: #1B1B1B;;font-size: 14px;padding: 5px 0;">Confirm date :</td>-->
							<!--		<td width="65%" style="color: #1B1B1B;;font-size: 14px;padding: 5px 0;">2/9/2019</td> -->
							<!--	</tr>-->
							<!--</table>-->
						</td>
						<td width="45%">
							<table cellspacing="0" cellpadding="0" style="width: 100%; ">
								<tr>
									<td width="80%" style="color: #1B1B1B;;font-size: 14px;padding: 5px 0;">Expected Deliver: ${shipments?.deliveryDateExpect || ""}</td>
									<!--<td width="20%" style="color: #1B1B1B;;font-size: 14px;padding: 5px 0;">${shipments?.deliveryDateExpect || ""}</td>-->
								</tr>
							</table>
						</td>
					</tr>
				</table>				
			</td>
		</tr> 
		<tr>
			<td style="padding: 10px 20px 50px;color: #1B1B1B;font-weight: bold;text-align: center;font-size: 14px;">
				CARRIER MUST SIGN LOAD CONFIRMATION AND FAX BACK TO AGENCY AT:<br>
				“THANK YOU FOR DONG BUSINESS WITH LOGISTIC MANAGEMENT<br>
				TO VIEW ALL AVAILABLE logisticmanagement ACCESS www.logisticmanagement.com<br>
				CALL OUR INTERACTIVE VOICE RESPONSE SYSTEM TO REPORT LOAD STATUS ~ (00) 728450<br>
			</td>
		</tr>
		<tr>
			<td style="padding: 0px 20px 5px;color: #1B1B1B;font-weight: bold;text-align: center;font-size: 14px;">
				Attention 
			</td>
		</tr>
		<tr>
			<td style="padding: 0px 20px 5px;color: #1B1B1B;font-weight: bold;text-align: center;font-size: 14px;">
				Cartier ceriifies It 1s aware of the California Air Resources Board's Truck and Bus, Drayage and Greenhouse Ges Rules  <br>
				a at on lads orang in. dosha oro passing NOUS Calo Carer il ize only vehicles hal rs  <br>
				‘compliant with those Rules. Please see CARB Regulations, Inciuding the CARE Dray rules. hilps: 'www.arb.ca.gov 
			</td>
		</tr>
	</table>

</body>
</html>
      `;
};
