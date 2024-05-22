



    //MONDRIAN - CREATED BY CHARLES LYNCH-GERRARD




    // COORDINATES

    x0 = 0;
    x1 = 200;
    x2 = 400;
    x3 = 600;

    y0 = 0;
    y1 = 200;
    y2 = 400;
    y3 = 600;

    // TOP LEFT

    var tlr1 = 255;
    var tlr2 = 255;
    var tlr3 = 200;
    var tlr = tlr1;
    

    var tlg1 = 0;
    var tlg2 = 0;
    var tlg3 = 50;
    var tlg = tlr1;

    var tlb1 = 255;
    var tlb2 = 225;
    var tlb3 = 255;
    var tlb = tlb1;

    let tls = true;

    // TOP MIDDLE

    var tmr1 = 225;
    var tmr2 = 255;
    var tmr3 = 200;
    var tmr = tmr1;

    var tmg1 = 0;
    var tmg2 = 0;
    var tmg3 = 50;
    var tmg = tmg1;

    var tmb1 = 225;
    var tmb2 = 255;
    var tmb3 = 225;
    var tmb = tmb1

    let tms = true;

    // TOP RIGHT

    var trr1 = 200;
    var trr2 = 200;
    var trr3 = 145;
    var trr = trr1;

    var trg1 = 0;
    var trg2 = 0;
    var trg3 = 50;
    var trg = trg1;

    var trb1 = 255;
    var trb2 = 225;
    var trb3 = 255;
    var trb = trb1;

    var trs = true;

    // MIDDLE LEFT

    var mlr1 = 170;
    var mlr2 = 200;
    var mlr3 = 255;
    var mlr = mlr1;

    var mlg1 = 30;
    var mlg2 = 30;
    var mlg3 = 70;
    var mlg = mlg1;

    var mlb1 = 130;
    var mlb2 = 130;
    var mlb3 = 155;
    var mlb = mlb1;

    var mls = true;

    // // MIDDLE MIDDLE

    var mmr1 = 255;
    var mmr2 = 255
    var mmr3 = 205;
    var mmr = mmr1;

    var mmg1 = 0;
    var mmg2 = 0;
    var mmg3 = 40;
    var mmg = mmg1;

    var mmb1 = 150;
    var mmb2 = 120;
    var mmb3 = 145;
    var mmb = mmb1;

    var mms = true;

    // // MIDDLE RIGHT

    var mrr1 = 225;
    var mrr2 = 200;
    var mrr3 = 150;
    var mrr = mrr1;

    var mrg1 = 25;
    var mrg2 = 55;
    var mrg3 = 95;
    var mrg = mrg1;

    var mrb1 = 150
    var mrb2 = 180;
    var mrb3 = 205;
    var mrb = mrb1;

    var mrs = true;

    // // BOTTOM LEFT

    var blr1 = 200;
    var blr2 = 170;
    var blr3 = 120;
    var blr = blr1;

    var blg1 = 55;
    var blg2 = 85;
    var blg3 = 125;
    var blg = blg1;

    var blb1 = 180;
    var blb2 = 210;
    var blb3 = 235;
    var blb = blb1;

    var bls = true;

    // // BOTTOM MIDDLE

    var bmr1 = 225;
    var bmr2 = 255;
    var bmr3 = 200;
    var bmr = bmr1;

    var bmg1 = 35;
    var bmg2 = 50;
    var bmg3 = 95;
    var bmg = bmg1;

    var bmb1 = 125;
    var bmb2 = 95;
    var bmb3 = 65;
    var bmb = bmb1;

    var bms = true;

    // // BOTTOM RIGHT

    var brr1 = 140;
    var brr2 = 170;
    var brr3 = 225;
    var brr = brr1;

    var brg1 = 70;
    var brg2 = 100;
    var brg3 = 145;
    var brg = brg1;

    var brb1 = 130;
    var brb2 = 130;
    var brb3 = 100;
    var brb = brb1;

    var brs = true;

    // TEXT OPTIONS

    var rspace = 17.5;
    var gspace = 54;
    var bspace = 82.5;
    var rh = 180;
    var ts = 10;
    var tc;

    // SOUND FILES

    var glaring_violin;
    var liquid_synth;
    var rushing_synth;
    var grating_bass;
    var kick;
    var marching_hihat;
    var slipping_clap;
    var popping_openhat;
    var skipping_hihat;

    var tll;
    var tla;
    var tlm;

    var tml;
    var tma;
    var tmm;

    var trl;
    var tra;
    var trm;

    var mll;
    var mla;
    var mlm;

    var mml;
    var mma;
    var mmm;

    var mrl;
    var mra;
    var mrm;

    var bll;
    var bla;
    var blm;

    var bml;
    var bma;
    var bmm;

    var brl;
    var bra;
    var brm;

    var start = true


    function preload() {
    soundFormats('mp3');
    
    kick = loadSound('audio/kick');
    kick.setBuffer(1);
    glaring_violin = loadSound('audio/glaring_violin');
    glaring_violin.setBuffer(1);
    liquid_synth = loadSound('audio/liquid_synth');
    liquid_synth.setBuffer(3);
    rushing_synth = loadSound('audio/rushing_synth');
    rushing_synth.setBuffer(5);
    grating_bass = loadSound('audio/grating_bass');
    grating_bass.setBuffer(7);
    marching_hihat = loadSound('audio/marching_hihat');
    marching_hihat.setBuffer(9);
    slipping_clap = loadSound('audio/slipping_clap');
    slipping_clap.setBuffer(11);
    popping_openhat = loadSound('audio/popping_openhat');
    popping_openhat.setBuffer(13);
    skipping_hihat = loadSound('audio/skipping_hihat');
    skipping_hihat.setBuffer(15);
}

function setup() {  

    // CANVAS OPTIONS

    background(0);
    createCanvas(600, 600);
    rectMode(CORNERS);

    // TEXT OPTIONS

    textFont('Times New Roman');
    tc = color(255,255,255);

    // AMPS

    tla = new p5.Amplitude();
    tla.setInput(kick);

    tma = new p5.Amplitude();
    tma.setInput(marching_hihat);

    tra = new p5.Amplitude();
    tra.setInput(skipping_hihat);

    mla = new p5.Amplitude();
    mla.setInput(slipping_clap);

    mma = new p5.Amplitude();
    mma.setInput(popping_openhat);

    mra = new p5.Amplitude();
    mra.setInput(rushing_synth);

    bla = new p5.Amplitude();
    bla.setInput(grating_bass);

    bma = new p5.Amplitude();
    bma.setInput(liquid_synth);

    bra = new p5.Amplitude();
    bra.setInput(glaring_violin);
    
    }

function mouseClicked() {

    // PLAY TRACKS

    if (start) {

    kick.loop();
    marching_hihat.loop();
    skipping_hihat.loop();
    slipping_clap.loop();
    popping_openhat.loop();
    rushing_synth.loop();
    grating_bass.loop();
    liquid_synth.loop();
    glaring_violin.loop();

    start = false
    
    } 

    // MATRIX LOGIC

    if (mouseX > x0 && mouseX < x1) {
        if (mouseY > y0 && mouseY < y1) {

            if (!tls) {
                kick.setVolume(1);
            }

            if (tls) {
                kick.setVolume(0);
                tls = false;
            } else tls = true;
        }
    } 

    if (mouseX > x1 && mouseX < x2) {
        if (mouseY > y0 && mouseY < y1) {

            if (!tms) {
                marching_hihat.setVolume(1);
            }

            if (tms) {
                marching_hihat.setVolume(0);
                tms = false;
            } else tms = true;
        }
    } 

    if (mouseX > x2 && mouseX < x3) {
        if (mouseY > y0 && mouseY < y1) {

            if (!trs) {
                skipping_hihat.setVolume(1);
            } 

            if (trs) {
                skipping_hihat.setVolume(0);
                trs = false;
            } else trs = true;
        }
    } 

    if (mouseX > x0 && mouseX < x1) {
        if (mouseY > y1 && mouseY < y2) {

            if (!mls) {
                slipping_clap.setVolume(1);
            }

            if (mls) {
                slipping_clap.setVolume(0);
                mls = false;
            } else mls = true;
        }
    } 
    

    if (mouseX > x1 && mouseX < x2) {
        if (mouseY > y1 && mouseY < y2) {

            if (!mms) {
                popping_openhat.setVolume(1);
            }

            if (mms) {
                popping_openhat.setVolume(0);
                mms = false;
            } else mms = true;
        }
    } 

    if (mouseX > x2 && mouseX < x3) {
        if (mouseY > y1 && mouseY < y2) {
            if (!mrs) {
                rushing_synth.setVolume(1);
            } 

            if (mrs) {
                rushing_synth.setVolume(0);
                mrs = false;
            } else mrs = true;
        }
    } 



    if (mouseX > x0 && mouseX < x1) {
        if (mouseY > y2 && mouseY < y3) {
            if (!bls) {
                grating_bass.setVolume(1);
            } 

            if (bls) {
                grating_bass.setVolume(0);
                bls = false;
            } else bls = true;
        }
    } 

    if (mouseX > x1 && mouseX < x2) {
        if (mouseY > y2 && mouseY < y3)
            if (!bms) {
                liquid_synth.setVolume(1);
            } 

            if (bms) {
                liquid_synth.setVolume(0);
                bms = false;
            } else bms = true;
    } 

    if (mouseX > x2 && mouseX < x3) {
        if (mouseY > y2 && mouseY < y3)
            if (!brs) {
                glaring_violin.setVolume(1);

            } 

            if (brs) {
                glaring_violin.setVolume(0);
                brs = false;
            } else brs = true;
    } 
    
}


function draw() {

    background(255);
    noStroke();

    // TOP LEFT

    push();

    tll = tla.getLevel();
    tlm = map(tll,0,1,0,10);

    if (tlm > 2) {

    tlr = tlr3;
    tlg = tlg3;
    tlb = tlb3; 

    } else {

    if (tlm > 1) {

    tlr = tlr2;
    tlg = tlg2;
    tlb = tlb2; 

    } else {

    tlr = tlr1;
    tlg = tlg1;
    tlb = tlb1;

    }

    }

    fill(tlr,tlg,tlb)
    rect(x0,y0,x1,y1);  

    fill(tc);
    textSize(ts);
    text(tlr,rspace,rh);
    text(tlg,gspace,rh);
    text(tlb,bspace,rh);

    pop();

    // TOP MIDDLE

    push();

    tml = tma.getLevel();
    tmm = map(tml,0,1,0,10);

    if (tmm > 5) {

    tmr = tmr3;
    tmg = tmg3;
    tmb = tmb3; 
    
    } else {
    
    if (tmm > 0.5) {
    
    tmr = tmr2;
    tmg = tmg2;
    tmb = tmb2; 
    
    } else {
    
    tmr = tmr1;
    tmg = tmg1;
    tmb = tmb1;
    
    }

    }

    fill(tmr,tmg,tmb);
    rect(x1,y0,x2,y1); 

    fill(tc);
    textSize(ts);
    text(tmr,rspace+x1,rh);
    text(tmg,gspace+x1,rh);
    text(tmb,bspace+x1,rh);

    pop();

    // TOP RIGHT

    push();

    if (trm > 0.5) {

    trr = trr3;
    trg = trg3;
    trb = trb3; 
        
    } else {
        
    if (trm > 0.1) {
        
    trr = trr2;
    trg = trg2;
    trb = trb2; 
        
    } else {
        
    trr = trr1;
    trg = trg1;
    trb = trb1;
        
    }
    
    }

    trl = tra.getLevel();
    trm = map(trl,0,1,0,10);

    fill(trr,trg,trb);
    rect(x2,y0,x3,y1);  

    fill(tc);
    textSize(ts);

    text(trr,rspace+x2,rh);
    text(trg,gspace+x2,rh);
    text(trb,bspace+x2,rh);

    pop();

    // MIDDLE LEFT

    push();

    if (mlm > 1) {

    mlr = mlr3;
    mlg = mlg3;
    mlb = mlb3; 
            
    } else {
            
    if (mlm > 0.5) {
            
    mlr = mlr2;
    mlg = mlg2;
    mlb = mlb2; 
            
    } else {
            
    mlr = mlr1;
    mlg = mlg1;
    mlb = mlb1;
            
    }
        
    }

    mll = mla.getLevel();
    mlm = map(mll,0,1,0,10);

    fill(mlr,mlg,mlb);
    rect(x0,y1,x1,y2); 

    fill(tc);
    textSize(ts);

    text(mlr,rspace,rh+y1);
    text(mlg,gspace,rh+y1);
    text(mlb,bspace,rh+y1);

    pop();

    // // MIDDLE MIDDLE

    push();

    if (mmm > 0.25) {

    mmr = mmr3;
    mmg = mmg3;
    mmb = mmb3; 
                
    } else {
                
    if (mmm > 0.125) {
                
    mmr = mmr2;
    mmg = mmg2;
    mmb = mmb2; 
                
    } else {
                
    mmr = mmr1;
    mmg = mmg1;
    mmb = mmb1;
                
    }
            
    }

    mmm = mma.getLevel();
    mmm = map(mmm,0,1,0,10);

    fill(mmr,mmg,mmb);
    rect(x1,y1,x2,y2); 

    fill(tc);
    textSize(ts);

    text(mmr,rspace+x1,rh+y1);
    text(mmg,gspace+x1,rh+y1);
    text(mmb,bspace+x1,rh+y1);

    pop();

    // MIDDLE RIGHT

    push();

    if (mrm > 1) {

    mrr = mrr3;
    mrg = mrg3;
    mrb = mrb3; 
                    
    } else {
                    
    if (mrm > 0.25) {
                    
    mrr = mrr2;
    mrg = mrg2;
    mrb = mrb2; 
                    
    } else {
                    
    mrr = mrr1;
    mrg = mrg1;
    mrb = mrb1;
                    
    }
                
    }

    mrm = mra.getLevel();
    mrm = map(mrm,0,1,0,10);

    fill(mrr,mrg,mrb);
    rect(x2,y1,x3,y2); 

    fill(tc);
    textSize(ts);

    text(mrr,rspace+x2,rh+y1);
    text(mrg,gspace+x2,rh+y1);
    text(mrb,bspace+x2,rh+y1);

    pop();

    // BOTTOM LEFT

    push();

    if (blm > 0.25) {

    blr = blr3;
    blg = blg3;
    blb = blb3; 
                    
    } else {
                    
    if (blm > 0.125) {
                    
    blr = blr2;
    blg = blg2;
    blb = blb2; 
                    
    } else {
                    
    blr = blr1;
    blg = blg1;
    blb = blb1;
                    
    }
                
    }
    
    blm = bla.getLevel();
    blm = map(blm,0,1,0,10);

    fill(blr,blg,blb);
    rect(x0,y2,x1,y3); 

    fill(tc);
    textSize(ts);

    text(blr,rspace,rh+y2);
    text(blg,gspace,rh+y2);
    text(blb,bspace,rh+y2);

    pop();

    // BOTTOM MIDDLE

    push();

    if (bmm > 1) {

    bmr = bmr3;
    bmg = bmg3;
    bmb = bmb3; 
                        
    } else {
                        
    if (bmm > 0.5) {
                        
    bmr = bmr2;
    bmg = bmg2;
    bmb = bmb2; 
                        
    } else {
                        
    bmr = bmr1;
    bmg = bmg1;
    bmb = bmb1;
                        
    }
                    
    }

    bmm = bma.getLevel();
    bmm = map(bmm,0,1,0,10);

    fill(bmr,bmg,bmb);
    rect(x1,y2,x2,y3); 

    fill(tc);
    textSize(ts);

    text(bmr,rspace+x1,rh+y2);
    text(bmg,gspace+x1,rh+y2);
    text(bmb,bspace+x1,rh+y2);

    pop();

    // // BOTTOM RIGHT

    push();

    if (brm > 0.5) {

    brr = brr3;
    brg = brg3;
    brb = brb3; 
                            
    } else {
                            
    if (brm > 0.25) {
                            
    brr = brr2;
    brg = brg2;
    brb = brb2; 
                            
    } else {
                            
    brr = brr1;
    brg = brg1;
    brb = brb1;
                            
    }
                        
    }

    brm = bra.getLevel();
    brm = map(brm,0,1,0,10);

    fill(brr,brg,brb);
    rect(x2,y2,x3,y3); 

    fill(tc);
    textSize(ts);

    text(brr,rspace+x2,rh+y2);
    text(brg,gspace+x2,rh+y2);
    text(brb,bspace+x2,rh+y2);

    pop();

    
}
