ALTER TABLE "Fault" ADD COLUMN "location" TEXT;

ALTER TABLE "Prediction" ADD COLUMN "faultId" TEXT;

CREATE INDEX "Prediction_faultId_idx" ON "Prediction"("faultId");

ALTER TABLE "Prediction"
  ADD CONSTRAINT "Prediction_faultId_fkey"
  FOREIGN KEY ("faultId") REFERENCES "Fault"("id")
  ON DELETE SET NULL ON UPDATE CASCADE;
