#include<iostream>
using namespace std;
int main() {
	int a;
	cout<<"Archaning bo'yi uzunligini kiriting Janob :  ";
	cin>>a; cout<<endl;
	
	for( int i=a; i>=1; i-- ) {                               // bo'yi a
		for( int j=1; j<=i+a/2; j++ ) { cout<<" ";  }        // a/2 (tag asosining yarmi) ta bo'sh joy siljitdim, 
     	for( int k=a;  k>=i;    k-- ) { cout<<"* "; }       // eni(ta asos) ham a
		cout<<endl;	 } 


    for( int i=a; i>=1; i-- ) {                           // bo'yi a bo'ldi , 
		for( int j=1; j<=i; j++ ) { cout<<" "; }         // bo'sh joy yo'q    
     	for( int k=a+a/2; k>=i; k-- ) { cout<<"* "; }   //  a/2 ta yaproq bn bshlanadi  (*_* a/4 ta yaproq qisqa o'mg va chap tomondan  )  e.g i=10   k=15  farq 6 ta   
		cout<<endl; }                                  // tag asosi == a+ a/2 ta

    for( int i=1; i<=a/2; i++ ) {                              // daraxt oyog'i bo'yi a/2
		for( int j=1; j<=a+1; j++ ) { cout<<" ";  }           // a+1 ta bo'sh joy siljitdim, simmetriya bo'lishi uchun
     	for( int k=1; k<=a/2; k++ ) { cout<<"* "; }          // eni ham a/2
		cout<<endl;	 } 
		
	for(int i=1; i<=a/2; i++) { cout<<" ";} 	     // bu o'tloq  :)
    for(int i=1; i<=a; i++) { cout<<"^^";}

cout<<endl<<"Marhamat, archangiz tayyor, Janob. Yangi yilingiz bilan :)";



system("PAUSE");



/*	for( int q=1; q<=7; q++ ) { 
		for( int k=1; k<=q; k++ ) { cout<<"*_"; }  cout<<endl; } break;	
*/














	
}
